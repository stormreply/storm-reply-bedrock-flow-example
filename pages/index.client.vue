<script setup>
import { markRaw } from "vue";
import Example from "~/example.json";
import { transformNodes } from "~/lib/node";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";
import { transformConnections } from "~/lib/edge";
import { Background } from "@vue-flow/background";
import {
  ConditionNode,
  InputNode,
  OutputNode,
  LambdaFunctionNode,
} from "#components";

const { layout } = useLayout();
const { fitView, addEdges } = useVueFlow();

const nodeTypes = {
  Condition: markRaw(ConditionNode),
  Input: markRaw(InputNode),
  Output: markRaw(OutputNode),
  LambdaFunction: markRaw(LambdaFunctionNode),
};

const edges = ref([]);
const nodes = ref([]);
onMounted(() => {
  nodes.value = transformNodes(Example.definition.nodes);
  edges.value = transformConnections(Example.definition.connections);
});
async function layoutGraph(direction) {
  nodes.value = layout(nodes.value, edges.value, direction);
  nextTick(() => {
    fitView();
  });
}

function onConnect(params) {
  const source = nodes.value.find((i) => i.id === params.source);

  if (source.type === "Condition") {
    addEdges({ type: "Conditional", ...params });
    return;
  }

  addEdges(params);
}

function onConnectStart({ nodeId, handleType }) {
  console.log("on connect start", { nodeId, handleType });
}

function onConnectEnd(event) {
  console.log("on connect end", event);
}
</script>
<template>
  <VueFlow
    :nodes
    :edges
    :nodeTypes
    style="height: 100vh; width: 100%"
    @nodes-initialized="layoutGraph('LR')"
    @connect="onConnect"
    @connect-start="onConnectStart"
    @connect-end="onConnectEnd"
  >
    <Background pattern-color="#aaa" :gap="20"></Background>
  </VueFlow>
</template>

<style>
.vue-flow__edge-path[type="Conditional"] {
  stroke-dasharray: 5, 5; /* Creates a dotted line pattern (5px dash, 5px gap) */
  stroke: red; /* Sets the color to red */
  stroke-width: 1.5; /* Optional: makes the line slightly thicker */
}
</style>
