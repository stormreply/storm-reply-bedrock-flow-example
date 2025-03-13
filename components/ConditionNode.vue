<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
</script>

<template>
  <div class="condition-node">
    <div class="node-header">
      <span class="node-title">Condition</span>
    </div>
    <div class="node-body">
      <div class="node-grid">
        <!-- Input handles on the left -->
        <div class="inputs-column">
          <template
            v-for="(target, idx) of $attrs.data.inputs"
            :key="target.name"
          >
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

        <!-- Output handles on the right -->
        <div class="outputs-column">
          <template
            v-for="(source, index) of $attrs.data.configuration.condition
              .conditions"
            :key="source.name"
          >
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
.condition-node {
  background-color: #f8f9fa;
  border: 2px solid #ff9f1c;
  border-radius: 6px;
  width: 200px;
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
  background-color: #ff9f1c;
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

.inputs-column,
.outputs-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-item,
.output-item {
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
}

.input-item {
  justify-content: flex-start;
}

.output-item {
  justify-content: flex-end;
}

.input-label {
  font-size: 12px;
  padding-left: 16px;
  color: #333;
}

.output-label {
  font-size: 12px;
  padding-right: 16px;
  color: #333;
}

.handle-target,
.handle-source {
  width: 10px;
  height: 10px;
  background-color: #ff9f1c;
  border: 2px solid white;
}

/* Override the default handle styles for better appearance */
:deep(.target) {
  left: -6px;
}

:deep(.source) {
  right: -6px;
}
</style>
