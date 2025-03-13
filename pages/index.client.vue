<script setup lang="ts">
import Example from "~/example.json";
import { transformNodes } from "~/lib/node";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";
import { transformConnections } from "~/lib/edge";
import { Background } from "@vue-flow/background";
const { layout } = useLayout();
const { fitView } = useVueFlow();
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
    :nodes="nodes"
    :edges="edges"
    style="height: 100vh; width: 100%"
    @nodes-initialized="layoutGraph('LR')"
  >
    <Background pattern-color="#aaa" gap="20"></Background>
    <template #node-Input="props">
      <InputNode v-bind="props" />
    </template>
    <template #node-Output="props">
      <div class="node-title">Output</div>
      <div class="node-id">{{ props.id }}</div>
    </template>
    <template #node-Condition="props">
      <ConditionNode v-bind="props" />
    </template>
  </VueFlow>
</template>
