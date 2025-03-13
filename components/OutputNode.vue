<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
</script>

<template>
  <div>
    <div>Output</div>
    <Handle id="node-handle" type="target" :position="Position.Top"> </Handle>
    <template v-for="target of $attrs.data.inputs">
      <Handle :id="target.name" type="target" :position="Position.Left" />
    </template>
  </div>
</template>
