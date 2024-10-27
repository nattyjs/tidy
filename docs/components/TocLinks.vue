<template>
  <div  class="toc-links">
    <h5 class="text-sm font-semibold text-gray-600 pt-4 pb-2">
      Table Of Content
    </h5>
    <p v-for="item,index in toclinks" :key="index" class="py-[3px]">
      <NuxtLink
        class="text-sm mt-1 font-DMSans_Regular text-gray-500 hover:text-green-400 cursor-pointer py-1"
        :to="route.path + '#' + item?.id" :class="{'text-green-500': route.hash === `#${item.id}`}"
        >{{ item.text }}</NuxtLink >
      <ul class="pl-4" v-if="item?.children" >
        <li v-for="link,index in item['children']" :key="index" >
        <NuxtLink
        class="text-sm mt-1 font-DMSans_Regular text-gray-500 hover:text-gray-700 cursor-pointer py-1"
        :to="route.path + '#' + link.id" :class="{'text-green-500': route.hash === `#${link.id}`}"
        >{{ link.text }}</NuxtLink>
      </li>

      </ul>
      </p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route)
import { defineProps } from 'vue';
defineProps({
  toclinks: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
