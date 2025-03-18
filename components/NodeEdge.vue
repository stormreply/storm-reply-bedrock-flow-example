<script setup>
import { BezierEdge } from "@vue-flow/core";
</script>

<template>
  <BezierEdge v-bind="$attrs" />
</template>

<style>
.vue-flow__edge-path[type="Conditional"] {
  stroke-dasharray: 5, 5; /* Creates a dotted line pattern (5px dash, 5px gap) */
  stroke: red; /* Sets the color to red */
  stroke-width: 1.5; /* Optional: makes the line slightly thicker */
}
</style>
