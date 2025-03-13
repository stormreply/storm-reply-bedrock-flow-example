<template>
  <NuxtPage />
</template>

<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";

/* shared-node-styles.css */

/* Base node styling */
.vue-flow-node {
  background-color: #f8f9fa;
  border-radius: 6px;
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

/* Node size variants */
.node-size-standard {
  width: 200px;
  min-height: 100px;
}

.node-size-small {
  width: 160px;
  min-height: 100px;
}

.node-size-large {
  width: 240px;
  min-height: 100px;
}

/* Node headers */
.node-header {
  color: white;
  padding: 8px 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: 600;
  font-size: 14px;
}

/* Node body */
.node-body {
  padding: 12px;
  position: relative;
  min-height: 70px;
}

/* Grid layout for inputs/outputs */
.node-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  min-height: 70px;
}

/* Columns for inputs and outputs */
.inputs-column,
.outputs-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Input and output items */
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

/* Labels */
.input-label,
.output-label {
  font-size: 12px;
  color: #333;
}

.input-label {
  padding-left: 16px;
}

.output-label {
  padding-right: 16px;
}

/* Positioning for absolute positioned rows */
.input-row,
.output-row {
  position: absolute;
  height: 24px;
  display: flex;
  align-items: center;
}

.input-row {
  left: 0;
  justify-content: flex-start;
}

.output-row {
  right: 0;
  justify-content: flex-end;
}

/* Handle styles */
.handle-data {
  width: 10px;
  height: 10px;
  background-color: blue;
  border: 2px solid white;
}

.handle-condition {
  width: 10px;
  height: 10px;
  background-color: orange;
  border: 2px solid white;
}

/* Override handle positions */
:deep(.target) {
  left: -6px;
}

:deep(.source) {
  right: -6px;
}
</style>
