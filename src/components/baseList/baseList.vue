<script setup lang="ts">

import { defineProps } from 'vue';
import { FriendT } from '../../types';
import BaseItem from '../baseItem/baseItem.vue';

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
    <div :class="'row header rounded-top'">
      {{ props.header }}
    </div>

    <div
      :class="[
        'list',
        'row',
      ]"
      @drop="props.onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
      <BaseItem v-for="item in props.list" :key="item.id" :data="item" />
    </div>

    <div :class="'row footer rounded-bottom'">
      <slot name="footer"></slot>
    </div>

  </div>

</template>

<style lang="scss">
  @use 'styles' as *;

  .header, .footer{
    height: 32px;
    justify-content: center;
    align-content: center;
    background-color: white;
  }

  .list {
    height: 200px;
    flex-direction: column;
    flex-wrap: nowrap !important;
    overflow: auto;

    background-color: rgba($color: blue, $alpha: 0.2);
  }
</style>
