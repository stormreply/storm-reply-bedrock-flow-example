<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
</script>

<template>
  <div class="vue-flow-node condition-node node-size-standard">
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
                class="handle-data"
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
                class="handle-condition"
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
  border: 2px solid #ff9f1c;
}

.condition-node .node-header {
  background-color: #ff9f1c;
}
</style>
