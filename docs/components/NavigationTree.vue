<template>
  <div class="max-h-[calc(100vh-100px)] overflow-y-scroll pb-3 z-10">
    <div v-for="(items, index) in navigation" :key="index">
      <h5 class="text-sm font-semibold text-gray-600 pt-4 pb-2">
        {{ items.title }}
      </h5>
      <div v-if="items.children">
        <nav class="ps-2">
          <NuxtLink
            class="text-sm mt-1 block ps-3 font-DMSans_Regular text-gray-500 hover:text-green-500 cursor-pointer border-l  pt-1 py-1" :class="{'text-green-500 border-l-green-400 ': route.path === item._path}"
            v-for="item in items.children"
            :to="item._path"
            :key="item.title"
            >{{ item.title }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const { data: navigation } = await useAsyncData("contentNavigation", () =>
  fetchContentNavigation()
);
</script>

<style scoped>
::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: white;
}
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
