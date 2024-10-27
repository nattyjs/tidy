<script setup lang="ts">
import { inject } from "vue";
import NavigationTree from "../components/NavigationTree.vue";
import Page from "../components/Page.vue";
import TocLinks from "../components/TocLinks.vue";

const route = useRoute();
const navigation = inject("navigation");
console.log(route.path);

const { data } = await useAsyncData(`${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);

// console.log(data)
const toclinks = data?.value?.body?.toc?.links;
console.log(toclinks);
</script>

<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-12 gap-x-8 max-w-7xl">
        <div class="col-span-3 relative ps-10">
          <div class="sticky left-0 top-24">
            <NavigationTree :navigationItems="navigation" v-if="navigation" />
          </div>
          <!-- Pass the navigation data -->
        </div>
        <div class="col-span-9">
          <div class="flex gap-x-10">
            <div>
              <slot />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- function useRoute() {
  throw new Error("Function not implemented.");
} -->

<!-- <style scoped>
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
</style> -->
