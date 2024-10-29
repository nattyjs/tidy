<script setup lang="ts">
import { useRoute } from "vue-router";
import DownArrowIcon from "./icon/down-arrow.icon.vue";
const route = useRoute();
const { data: navigation } = await useAsyncData("contentNavigation", () =>
  fetchContentNavigation()
);
const openIndexes = ref<number[]>([]);

function toggleDropdown(index: number) {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((i) => i !== index);
  } else {
    openIndexes.value.push(index);
  }
}
</script>

<template>
  <div class="max-h-[calc(100vh-100px)] overflow-y-scroll pb-3 z-10">
    <div v-for="(items, index) in navigation" :key="index">
      <div class="pt-4 pb-2">
        <h5
          @click="toggleDropdown(index)"
          class="flex justify-between items-center text-sm font-semibold text-gray-600"
        >
          <span class="cursor-pointer">{{
            items.title
          }}</span>
          <span class="pe-5"
            ><down-arrow-icon
              class="w-4 fill-gray-500 transition-all duration-300"
              :class="{ '-rotate-90': !openIndexes.includes(index) }"
          /></span>
        </h5>
      </div>
      <div
        :class="{
          'max-h-full overflow-y-auto': openIndexes.includes(index),
          'max-h-0': !openIndexes.includes(index),
        }"
        class="overflow-hidden transition-max-height duration-700"
      >
        <div v-if="items.children">
          <nav class="ps-2">
            <NuxtLink
              class="text-sm mt-1 block ps-3 font-DMSans_Regular text-gray-500 hover:text-green-500 hover:border-l-green-400 cursor-pointer border-l pt-1 py-1"
              :class="{
                'text-green-500 border-l-green-400 ': route.path === item._path,
              }"
              v-for="item in items.children"
              :to="item._path"
              :key="item.title"
              >{{ item.title }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

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
