<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
// Input Node can only have outputs
</script>

<template>
  <div class="vue-flow-node input-node node-size-small">
    <div class="node-header">
      <span class="node-title">Input</span>
    </div>
    <div class="node-body">
      <div class="node-grid">
        <!-- Spacer column to push content to the right -->
        <div class="spacer-column"></div>

        <!-- Output handles on the right -->
        <div class="outputs-column">
          <template v-for="source of $attrs.data.outputs" :key="source.name">
            <div class="output-item">
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
    </div>
  </div>
</template>

<style scoped>
/* Node type specific colors */
.input-node {
  border: 2px solid #4361ee;
}

.input-node .node-header {
  background-color: #4361ee;
}
</style>
