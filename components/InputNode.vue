<script setup>
const { nodeColor = "#4361ee" } = defineProps(["nodeColor"]);
</script>
<template>
  <div
    class="bg-white rounded-md shadow-md hover:shadow-lg"
    :style="{ borderColor: nodeColor, borderWidth: '2px' }"
  >
    <!-- Input header section -->
    <div
      class="text-xl font-medium text-white relative flex items-center"
      :style="{ backgroundColor: nodeColor }"
    >
      <span class="ml-2 text-sm">Input</span>
    </div>

    <!-- Output items -->
    <template v-for="source of $attrs.data.outputs" :key="source.name">
      <div class="p-1 relative text-right flex items-center">
        <p class="ml-16 mr-2 text-sm font-sm">
          {{ source.name }}: {{ source.type }}
        </p>
        <DataHandleSource :id="source.name" />
      </div>
    </template>
  </div>
</template>
