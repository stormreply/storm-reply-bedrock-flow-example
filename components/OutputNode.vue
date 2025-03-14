<script setup>
const { nodeColor = "#6366f1" } = defineProps(["nodeColor"]);
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
      <NodeHandleTarget> </NodeHandleTarget>
      <span class="ml-2 text-sm">Output</span>
    </div>

    <!-- Input items -->
    <template v-for="target of $attrs.data.inputs" :key="target.name">
      <div class="p-1 pl-0 relative flex items-center">
        <div class="ml-2 text-sm font-sm">
          {{ target.name }}: {{ target.type }}
        </div>

        <DataHandleTarget :id="target.name" />
      </div>
    </template>
  </div>
</template>
