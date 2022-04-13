<script setup lang="ts">

import { ref, computed } from 'vue';
import BaseList from './components/baseList/baseList.vue';
import { FriendT } from './types';
import { onDrop } from './dragAndDropHandlers';

import setFriendList from './buttonHandlers';

const items = ref<FriendT[]>([]);

const listOne = computed(() => items.value.filter((item) => item.list === 'all'));
const listTwo = computed(() => items.value.filter((item) => item.list === 'selected'));

const handleLoginClick = () => {
  setFriendList(items);
};

const handleShowClick = () => {
  console.log(listTwo.value);
};

</script>

<template>
  <div class="container main-container rounded">
    <div class="row h-100">
      <div class="col m-3 me-2">
        <BaseList :list="listOne" :onDrop="onDrop(items, 'all')" :type="'all'" :header="'Friend list'">
          <template v-slot:footer>
            <button @click="handleLoginClick">login</button>
          </template>
        </BaseList>
      </div>
      <div class="col m-3 ms-2">
        <BaseList :list="listTwo" :onDrop="onDrop(items, 'selected')" :type="'selected'" :header="'Selected friends'">
          <template v-slot:footer>
            <button @click="handleShowClick">show</button>
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
