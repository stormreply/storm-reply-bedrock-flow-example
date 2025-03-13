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
    <Background pattern-color="#aaa" gap="20"></Background>
    <template #node-Input="props">
      <div class="node-title">Input</div>
      <div class="node-id">{{ props.id }}</div>
    </template>
    <template #node-Output="props">
      <div class="node-title">Output</div>
      <div class="node-id">{{ props.id }}</div>
    </template>
    <template #node-Condition="props">
      <div class="node-title">Condition</div>
      <div class="node-id">{{ props.id }}</div>
    </template>
  </VueFlow>
</template>
<style>
/* Common styling */
.vue-flow__node {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  transition: all 0.2s ease;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  text-align: center;
}

.node-title {
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.node-id {
  padding: 8px;
  font-size: 12px;
  opacity: 0.8;
}

/* Input node - blue theme */
.vue-flow__node-Input {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  padding: 0;
}

/* Output node - green theme */
.vue-flow__node-Output {
  background: linear-gradient(135deg, #059669, #10b981);
  color: white;
  border: none;
  padding: 0;
}

/* Condition node - amber theme */
.vue-flow__node-Condition {
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: white;
  border: none;
  padding: 0;
}

/* Hover effects */
.vue-flow__node:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* Edge styling */
.vue-flow__edge-path {
  stroke: #64748b;
  stroke-width: 2;
}
.vue-flow__edge-path[type="data"] {
  stroke: #64748b;
  stroke-width: 2;
}

.vue-flow__edge-path[type="conditional"] {
  stroke-width: 2;
  stroke-dasharray: 5, 3;
}
.vue-flow__edge:hover .vue-flow__edge-path {
  stroke: #0f172a;
  stroke-width: 3;
}

/* Handle styling */
.vue-flow__handle {
  width: 8px;
  height: 8px;
  background-color: white;
  border: 2px solid #64748b;
}
</style>
