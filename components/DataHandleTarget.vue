<script setup>
import { Position, Handle } from "@vue-flow/core";

function isValidConnection(connection) {
  return true;
}
</script>

<template>
  <Handle
    :id="$attrs.id"
    type="target"
    :position="Position.Left"
    class="handle-data"
    :is-valid-connection="isValidConnection"
  />
</template>
