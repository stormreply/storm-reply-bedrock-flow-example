<script setup>
import { Position, Handle } from "@vue-flow/core";

function isValidConnection(connection) {
  return true;
}
</script>

<template>
  <Handle
    :id="$attrs.id"
    type="source"
    :position="Position.Right"
    class="handle-data"
    :is-valid-connection="isValidConnection"
  />
</template>
