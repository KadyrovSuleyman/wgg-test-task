<script setup lang="ts">

import { defineProps } from 'vue';
import { FriendT } from '../types';
import { startDrag } from '../dragAndDropHandlers';

const props = defineProps({
  data: FriendT,
});

</script>

<template>

  <div :class="[
      'list-group-item',
      'w-75',
      'rounded-3',
      'my-2',

      'd-flex'
    ]"
    draggable="true"
    @dragstart="startDrag($event, data)"
  >
    <img :class="[
        'rounded-circle',
        'border',
        'me-2',
      ]"
      :src="props.data.photo_50"
      :alt="`${props.data.name} avatar`"
    >
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{ props.data.name }}</div>
      {{ props.data.university_name }}
    </div>

  </div>

</template>
