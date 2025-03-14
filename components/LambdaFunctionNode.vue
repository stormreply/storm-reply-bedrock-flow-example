<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
// LambdaFunction

const { title, nodeColor } = useLambdaMapping();
</script>

<template>
  <div class="vue-flow-node lambda-node node-size-large">
    <div class="node-header">
      <span class="node-title">{{ title }}</span>
    </div>
    <div class="node-body">
      <Handle
        id="handle-condition"
        type="target"
        :position="Position.Left"
        class="handle-condition"
      />

      <!-- Input handles on the left -->
      <template v-for="target of $attrs.data.inputs" :key="target.name">
        <div class="input-row" :style="{ top: `${36 + 30 * target.index}px` }">
          <Handle
            :id="target.name"
            type="target"
            :position="Position.Left"
            class="handle-data"
          />
          <div class="input-label">{{ target.name }}</div>
        </div>
      </template>

      <!-- Output handles on the right -->
      <template v-for="source of $attrs.data.outputs" :key="source.name">
        <div class="output-row" :style="{ top: `${36 + 30 * source.index}px` }">
          <div class="output-label">{{ source.name }}</div>
          <Handle
            :id="source.name"
            type="source"
            :position="Position.Right"
            class="handle-data"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.lambda-node {
  border: 2px solid v-bind(nodeColor);
}

.lambda-node .node-header {
  background-color: v-bind(nodeColor);
}
</style>
