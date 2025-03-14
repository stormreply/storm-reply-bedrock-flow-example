<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
// Output component
const { nodeColor = "#6366f1" } = defineProps(["nodeColor"]);
function isValidConnection(connection) {
  console.log(connection);
  return true;
}
</script>
<template>
  <div
    class="bg-white rounded-md shadow-md hover:shadow-lg"
    :style="{ borderColor: nodeColor, borderWidth: '2px' }"
  >
    <!-- Output header section -->
    <div
      class="text-xl font-medium text-white relative flex items-center"
      :style="{ backgroundColor: nodeColor }"
    >
      <Handle
        id="handle-condition"
        type="target"
        :position="Position.Left"
        class="handle-condition"
        :is-valid-connection="isValidConnection"
      />
      <span class="ml-2 text-sm">Output</span>
    </div>

    <!-- Input items -->
    <template v-for="target of $attrs.data.inputs" :key="target.name">
      <div class="p-1 pl-0 relative flex items-center">
        <div class="ml-2 text-sm font-sm">
          {{ target.name }}: {{ target.type }}
        </div>
        <Handle
          :id="target.name"
          type="target"
          :position="Position.Left"
          class="handle-data"
          :is-valid-connection="isValidConnection"
        />
      </div>
    </template>
  </div>
</template>
