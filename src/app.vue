<script setup lang="ts">

import { ref, computed } from 'vue';
import BaseList from './components/baseList/baseList.vue';
import { FriendT } from './types';
import { onDrop } from './dragAndDropHandlers';

import { login, show } from './buttonHandlers';

const items = ref<FriendT[]>([
  {
    id: 0,
    name: 'Item A',
    list: 'all',
  },
  {
    id: 1,
    name: 'Item B',
    list: 'all',
  },
  {
    id: 2,
    name: 'Item C',
    list: 'selected',
  },
]);

const listOne = computed(() => items.value.filter((item) => item.list === 'all'));
const listTwo = computed(() => items.value.filter((item) => item.list === 'selected'));

</script>

<template>
  <div class="container main-container rounded">
    <div class="row h-100">
      <div class="col m-3 me-2">
        <BaseList :list="listOne" :onDrop="onDrop(items, 'all')" :type="'all'" :header="'Friend list'">
          <template v-slot:footer>
            <button @click="login">login</button>
          </template>
        </BaseList>
      </div>
      <div class="col m-3 ms-2">
        <BaseList :list="listTwo" :onDrop="onDrop(items, 'selected')" :type="'selected'" :header="'Selected friends'">
          <template v-slot:footer>
            <button @click="show">show</button>
          </template>
        </BaseList>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use 'styles' as *;

  // .main-container {
  //   height: 400px;
  // }
</style>
