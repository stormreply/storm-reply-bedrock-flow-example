<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
// Input Node can only have outputs
</script>

<template>
  <div class="input-node">
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
                class="handle-source"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-node {
  background-color: #f8f9fa;
  border: 2px solid #4361ee;
  border-radius: 6px;
  width: 160px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
}

.node-header {
  background-color: #4361ee;
  color: white;
  padding: 8px 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: 600;
  font-size: 14px;
}

.node-body {
  padding: 12px;
  position: relative;
}

.node-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  min-height: 70px;
}

.outputs-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.output-item {
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.output-label {
  font-size: 12px;
  padding-right: 16px;
  color: #333;
}

.handle-source {
  width: 10px;
  height: 10px;
  background-color: #4361ee;
  border: 2px solid white;
}

/* Override the default handle styles for better appearance */
:deep(.source) {
  right: -6px;
}
</style>
