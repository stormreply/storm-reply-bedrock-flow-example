<script setup>
import NodeHandleSource from "./NodeHandleSource.vue";
const { nodeColor = "#ff9f1c" } = defineProps(["nodeColor"]);
</script>
<template>
  <div
    class="bg-white rounded-md shadow-md hover:shadow-lg"
    :style="{ borderColor: nodeColor, borderWidth: '2px' }"
  >
    <!-- Condition header section -->
    <div
      class="text-xl font-medium text-white relative flex items-center"
      :style="{ backgroundColor: nodeColor }"
    >
      <span class="ml-2 text-sm">Condition</span>
    </div>

    <!-- Input items (left side) -->
    <p class="font-lg ml-2">Inputs</p>
    <template v-for="target of $attrs.data.inputs" :key="target.name">
      <div class="p-1 pl-0 relative flex items-center">
        <div class="ml-2 text-sm font-sm">
          {{ target.name }}: {{ target.type }}
        </div>
        <div class="ml-2 text-sm font-sm">
          {{ target.expression }}
        </div>

        <DataHandleTarget :id="target.name" />
      </div>
    </template>

    <hr />

    <!-- Output items (right side) -->
    <p class="font-lg mr-2 flex justify-center">Outputs</p>
    <template
      v-for="source of $attrs.data.configuration.condition.conditions"
      :key="source.name"
    >
      <div class="p-1 relative text-right flex items-center">
        <p class="ml-16 mr-2 text-sm font-sm">{{ source.name }}</p>
        <p class="ml-16 mr-2 text-sm font-sm">{{ source.expression }}</p>

        <NodeHandleSource :id="source.name"></NodeHandleSource>
      </div>
    </template>
  </div>
</template>
