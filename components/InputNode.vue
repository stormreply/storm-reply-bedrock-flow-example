<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
// Input Node can only have outputs
</script>

<template>
  <div>
    <div>Input</div>
    <template v-for="source of $attrs.data.outputs">
      <Handle :id="source.name" type="source" :position="Position.Right" />
    </template>
  </div>
</template>
