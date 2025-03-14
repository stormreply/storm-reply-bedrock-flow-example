<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";

function isValidConnection(connection) {
  console.log(connection);
}
</script>

<template>
  <div class="vue-flow-node output-node node-size-small">
    <div class="node-header">
      <span class="node-title">Output</span>
    </div>
    <div class="node-body">
      <div class="node-grid">
        <!-- Input handles on the left -->
        <div class="inputs-column">
          <!-- Main handle (formerly top handle) -->
          <div class="input-item main-input-item">
            <Handle
              id="hanlde-condition"
              :is-valid-connection="isValidConnection"
              type="target"
              :position="Position.Left"
              class="handle-condition"
            />
            <div class="input-label">Main Input</div>
          </div>

          <!-- Regular input handles -->
          <template v-for="target of $attrs.data.inputs" :key="target.name">
            <div class="input-item">
              <Handle
                :id="target.name"
                type="target"
                :position="Position.Left"
                class="handle-data"
              />
              <div class="input-label">{{ target.name }}</div>
            </div>
          </template>
        </div>

        <!-- Spacer column on the right -->
        <div class="spacer-column"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Component uses shared styles */
.main-input-item {
  margin-bottom: 4px;
}

.output-node {
  border: 2px solid #2ec4b6;
}

.output-node .node-header {
  background-color: #2ec4b6;
}
</style>
