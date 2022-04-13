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
    <div class="ms-2 w-100">
      <div :class="'fw-bold'">
        {{ props.data.name }}
      </div>
      <input disabled :value="props.data.university_name" :class="'text-reset w-100'"/>
    </div>

  </div>

</template>
