<script setup lang="ts">

import { defineProps } from 'vue';
import { FriendT } from '../types';
import BaseItem from './baseItem.vue';

const props = defineProps({
  header: String,
  type: String,
  list: {
    type: Object,
    default: [] as FriendT[],
  },
  onDrop: {
    type: Function,
    default: () => ({}),
  },
});

</script>

<template>

  <div :class="[
    'friends-block',
    'h-100',
  ]">
    <div :class="[
      'header',
      'row',
      'rounded-top',
      'justify-content-center',
      'align-content-center',
      'text-uppercase',
      'fs-5',
    ]">
      {{ props.header }}
    </div>

    <div
      :class="[
        'list',

        'row',
        'flex-column',
        'flex-nowrap',
        'align-items-center',

        'overflow-auto',
        'list-group',

        'rounded-0',
      ]"
      @drop="props.onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
      <BaseItem v-for="item in props.list" :key="item.id" :data="item" />
    </div>

    <div :class="[
      'footer',
      'row',
      'rounded-bottom',
      'justify-content-center',
      'align-content-center',
    ]">
      <slot name="footer"></slot>
    </div>

  </div>

</template>
