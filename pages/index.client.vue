<script setup lang="ts">
import { markRaw } from "vue";
import Example from "~/example.json";
import { transformNodes } from "~/lib/node";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";
import { transformConnections } from "~/lib/edge";
import { Background } from "@vue-flow/background";
import { ConditionNode, InputNode, OutputNode } from "#components";

const { layout } = useLayout();
const { fitView } = useVueFlow();

const nodeTypes = {
  Condition: markRaw(ConditionNode),
  Input: markRaw(InputNode),
  Output: markRaw(OutputNode),
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
</script>
<template>
  <VueFlow
    :nodes
    :edges
    :nodeTypes
    style="height: 100vh; width: 100%"
    @nodes-initialized="layoutGraph('LR')"
  >
    <Background pattern-color="#aaa" :gap="20"></Background>
  </VueFlow>
</template>
