<script setup lang="ts">

import { defineProps } from 'vue';
import { FriendT } from '../../types';
import { startDrag } from '../../dragAndDropHandlers';

const props = defineProps({
  data: FriendT,
});

</script>

<template>

  <div :class="[
      'list-group-item',
    ]"
    draggable="true"
    @dragstart="startDrag($event, data)"
  >
    {{ props.data.name }}
  </div>

</template>
