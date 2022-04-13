<script setup lang="ts">

import { defineProps } from 'vue';
import { FriendT } from '../../types';
import { startDrag } from '../../dragAndDropHandlers';

const props = defineProps({
  data: FriendT,
});

</script>

<template>

      <div
        draggable="true"
        @dragstart="startDrag($event, data)"
      >
        {{ props.data.name }} {{ props.data.list }}
      </div>

</template>

<style lang="scss">

</style>
