<script setup lang="ts">

import { ref, computed } from 'vue';
import BaseList from './components/baseList.vue';
import { FriendT } from './types';
import { onDrop } from './dragAndDropHandlers';

import getFriendList from './getFriendList';

const items = ref<FriendT[]>([]);

const allList = computed(() => items.value.filter((item) => item.list === 'all'));
const selectedList = computed(() => items.value.filter((item) => item.list === 'selected'));

const handleLoginClick = () => {
  getFriendList(items);
};

const handleExportClick = () => {
  const resultList = selectedList.value.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  console.log(resultList);
};

</script>

<template>
  <div :class="[
    'container',
    'main-container',
    'rounded',
    'my-3',
  ]">

    <div class="row h-100">
      <div class="col m-3 me-2">
        <BaseList
          :list="allList" :onDrop="onDrop(items, 'all')"
          :type="'all'" :header="'Friend list'"
        >
          <template v-slot:footer>
            <button :class="[
              'btn',
              'btn-login',
              'w-50',
            ]"
            @click="handleLoginClick"
            v-if="items.length === 0"
            >
              <div class="container p-0">
                <div :class="[
                    'row',
                    'p-0',
                    'justify-content-center',
                    'align-items-center',
                  ]"
                >
                  <div :class="'img vk-logo p-0 me-2'" />
                  login
                </div>
              </div>
            </button>
          </template>
        </BaseList>
      </div>

      <div class="col m-3 ms-2">
        <BaseList
          :list="selectedList" :onDrop="onDrop(items, 'selected')"
          :type="'selected'" :header="'Selected friends'"
        >
          <template v-slot:footer>
            <button :class="[
              'btn',
              'btn-export',
              'w-50',
            ]"
            @click="handleExportClick">
              export to console
            </button>
          </template>
        </BaseList>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  @use 'styles' as *;

  .vk-logo {
    background-image: url(/src/static/VK_Monochrome_Compact_Logo.svg) !important;
    width: 32px !important;
    height: 32px !important;

    background-size: cover;
  }
</style>
