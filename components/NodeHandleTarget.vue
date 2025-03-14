<script setup>
import { Handle, useVueFlow, useNodeConnections } from "@vue-flow/core";
import { Position } from "@vue-flow/core";

const { onConnectStart, onConnectEnd, nodes } = useVueFlow();
const connections = useNodeConnections();

const currentNodeConnection = ref();
onConnectStart((params) => {
  currentNodeConnection.value = nodes.value.find((node) => {
    return node.id === params.nodeId;
  });
});

onConnectEnd(() => {
  currentNodeConnection.value = null;
});

const isConnected = computed(() => {
  return connections.value.find((connection) => {
    return connection.targetHandle === "handle-condition";
  });
});

const isVisible = computed(() => {
  return (
    isConnected.value ||
    currentNodeConnection?.value?.data?.type === "Condition"
  );
});

function isValidConnection(connection) {
  return true;
}
</script>
<template>
  <Handle
    :style="{ opacity: isVisible ? 1 : 0 }"
    id="handle-condition"
    type="target"
    :position="Position.Left"
    class="handle-condition"
    :is-valid-connection="isValidConnection"
  />
</template>
