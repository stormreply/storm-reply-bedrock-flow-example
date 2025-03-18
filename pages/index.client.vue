<script setup>
import { markRaw } from "vue";
import Example from "~/example.json";
import { transformNodes } from "~/lib/node";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";
import { transformConnections } from "~/lib/edge";
import { Background } from "@vue-flow/background";
import {
  NodeEdge,
  DataEdge,
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

const edgeTypes = {
  Data: markRaw(DataEdge),
  Conditional: markRaw(NodeEdge),
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

  console.log(params);

  if (source.type === "Condition") {
    addEdges({ type: "Conditional", ...params });
    return;
  }

  addEdges(params);
}
</script>
<template>
  <VueFlow
    :nodes
    :edges
    :nodeTypes
    :edgeTypes
    style="height: 100vh; width: 100%"
    @nodes-initialized="layoutGraph('LR')"
    @connect="onConnect"
  >
    <Background pattern-color="#aaa" :gap="20"></Background>
  </VueFlow>
</template>
