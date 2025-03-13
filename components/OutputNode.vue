<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
</script>

<template>
  <div class="output-node">
    <div class="node-header">
      <span class="node-title">Output</span>
    </div>
    <div class="node-body">
      <div class="node-grid">
        <!-- Input handles on the left -->
        <div class="inputs-column">
          <!-- Main handle (formerly top handle) -->
          <div class="main-input-item">
            <Handle
              id="node-handle"
              type="target"
              :position="Position.Left"
              class="handle-main"
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
                class="handle-target"
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
.output-node {
  background-color: #f8f9fa;
  border: 2px solid #2ec4b6;
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
  position: relative;
}

.node-header {
  background-color: #2ec4b6;
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
  min-height: 70px;
}

.node-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  min-height: 70px;
}

.inputs-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.main-input-item {
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4px;
}

.input-item {
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.input-label {
  font-size: 12px;
  padding-left: 16px;
  color: #333;
}

.handle-main {
  width: 12px;
  height: 12px;
  background-color: #2ec4b6;
  border: 2px solid white;
  left: -7px;
}

.handle-target {
  width: 10px;
  height: 10px;
  background-color: #2ec4b6;
  border: 2px solid white;
}

/* Override the default handle styles for better appearance */
:deep(.target) {
  left: -6px;
}
</style>
