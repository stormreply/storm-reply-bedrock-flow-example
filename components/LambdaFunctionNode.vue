<script setup>
const { title, nodeColor } = useLambdaMapping();
</script>

<template>
  <div
    class="bg-white rounded-md shadow-md hover:shadow-lg"
    :style="{ borderColor: nodeColor, borderWidth: '2px' }"
  >
    <!-- Lambda function header section -->
    <div
      class="text-xl font-medium text-white relative flex items-center"
      :style="{ backgroundColor: nodeColor }"
    >
      <NodeHandleTarget> </NodeHandleTarget>
      <span class="ml-2 text-sm">{{ title }}</span>
    </div>

    <!-- Input items (left side) -->
    <p class="font-lg ml-2">Inputs</p>
    <template v-for="target of $attrs.data.inputs" :key="target.name">
      <div class="p-1 pl-0 relative flex items-center">
        <div class="ml-2 text-sm font-sm">
          {{ target.name }}: {{ target.type }}
        </div>
        <DataHandleTarget :id="target.name" />
      </div>
    </template>

    <hr />
    <!-- Output items (right side) -->
    <p class="font-lg mr-2 flex justify-end">Outputs</p>
    <template v-for="source of $attrs.data.outputs" :key="source.name">
      <div class="p-1 relative text-right flex items-center">
        <p class="ml-16 mr-1 text-sm font-sm">
          {{ source.name }}: {{ source.type }}
        </p>

        <DataHandleSource :id="source.name" />
      </div>
    </template>
  </div>
</template>
