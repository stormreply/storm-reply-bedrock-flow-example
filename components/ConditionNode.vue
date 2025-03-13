<script setup>
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";

// props were passed from the slot using `v-bind="customNodeProps"`
</script>

<template>
  <div>
    <div>Condition</div>

    <template v-for="target of $attrs.data.inputs">
      <Handle :id="target.name" type="target" :position="Position.Left" />
    </template>

    <template
      v-for="(source, index) of $attrs.data.configuration.condition.conditions"
      :key="source.name"
    >
      <div>
        <Handle
          :id="source.name"
          type="source"
          :position="Position.Right"
          :style="{
            top: `${10 + index * 20}px`,
            bottom: 'auto',
          }"
        />
      </div>
    </template>
  </div>
</template>
