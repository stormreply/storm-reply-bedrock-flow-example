<script setup lang="ts">
import Example from "~/example.json";
import { transformNodes } from "~/lib/node";
import { VueFlow, useVueFlow } from "@vue-flow/core";
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
    <Background></Background>
    <template #node-custom="customNodeProps">
      {{ customNodeProps.id }}
    </template>
  </VueFlow>
</template>

<style>
.vue-flow__node-custom {
  background: purple;
  color: white;
  border: 1px solid purple;
  border-radius: 4px;
  box-shadow: 0 0 0 1px purple;
  padding: 8px;
}
</style>
