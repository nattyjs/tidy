<script setup lang="ts">
import CopyIcon from "~/components/icon/copy.icon.vue";
import RightArrowIcon from "~/components/icon/right-arrow-icon.vue";
import SafeCheckIcon from "~/components/icon/safe-check.icon.vue";
import Footer from "~/components/Footer.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
console.log(page);
useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <!-- <div>
    <div>
      <div>
        <div>
          <h1>{{ page?.hero.title }}</h1>
          <p>{{ page?.hero.description }}</p>
        </div>
        <div>
          <NuxtLink :to="page?.hero.links[0].to" target="_blank">
            {{ page?.hero.links[0].icon }}
            {{ page?.hero.links[0].label }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <MDC :value="page?.hero.title" />
      </div>

      <div>
        <MDC :value="page?.hero?.code" tage="pre" />
      </div>
      <div>
        <h1>{{ page?.features?.title }}</h1>
        <NuxtLink :to="page?.features?.links[0].to">{{
          page?.features.links[0].label
        }}</NuxtLink>
        <div class="flex">
          <div v-for="item in page?.features?.items" :key="item?.title">
            <p>{{ item?.title }}</p>
            <p>{{ item?.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:my-32">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-12 lg:col-span-8">
          <div class="pb-6">
            <p
              class="text-5xl md:text-6xl 2xl:text-7xl text-gray-900 font-bold tracking-wide max-w-xl"
            >
              {{ page?.hero.title }}
            </p>
          </div>
          <div class="pb-10 lg:pe-32">
            <p class="text-lg font-normal tracking-normal text-gray-500">
              {{ page?.hero.description }}
            </p>
          </div>
          <div class="">
            <NuxtLink :to="page?.hero.links[0].to" target="_blank">
              <button
                class="border flex items-center gap-x-1.5 py-2 px-3 rounded-md bg-[#00C16A] tracking-wide text-sm font-medium text-white hover:bg-green-600"
              >
                <span>{{ page?.hero.links[0].label }}</span>
                <span>
                  <right-arrow-icon class="w-3 fill-white" />
                </span>
              </button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="lg:col-span-4 col-span-12 lg:raw-span-4 flex flex-col items-center my-28 lg:my-0 lg:"
        >
          <div class="w-96 translate-y-5 -translate-x-10">
            <div
              class="border py-3.5 px-4 rounded-t-md text-sm text-gray-600 tracking-wider flex justify-between"
            >
              <span><MDC :value="page?.hero.title" /></span>
              <span>
                <copy-icon class="w-4 fill-gray-600 hover:fill-gray-800 cursor-pointer" />
              </span>
            </div>
            <p
              class="border py-3.5 px-4 rounded-b-md border-t-0 tracking-wider text-green-500 font-medium bg-gray-50"
            >
              <MDC :value="page?.hero?.code" tage="pre" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-8">
      <div class="flex flex-col items-center">
        <h1
          class="py-16 md:py-24 tracking-tight font-bold max-w-5xl mx-auto text-gray-800 text-4xl lg:text-5xl text-center"
        >
          {{ page?.features?.title }}
        </h1>
        <div class="grid grid-cols-12 gap-7">
          <div
            v-for="item in page?.features?.items"
            :key="item?.title"
            class="col-span-12 md:col-span-6 xl:col-span-4 border h-auto rounded-lg p-5 hover:bg-gray-50 cursor-pointer hover:border-green-400 transition-all duration-500 hover:-translate-y-1 hover:shadow-md  hover:bg-gradient-to-r from-white to-gray-100"
          >
            <span>
              <safe-check-icon class="w-7 fill-gray-700" />
            </span>
            <p class="pt-2 text-base font-semibold text-gray-700">
              {{ item?.title }}
            </p>
            <p class="pt-2 text-base text-gray-400 tracking-tight font-normal">
              {{ item?.description }}
            </p>
          </div>
        </div>
        <div
          class=" flex items-center gap-x-2 mt-24 mb-10 py-1.5 px-5 border border-gray-300 rounded-md font-medium text-gray-600 text-sm bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all duration-300"
        >
          <NuxtLink :to="page?.features?.links[0].to">{{
            page?.features.links[0].label
          }}</NuxtLink>
          <span><right-arrow-icon class="w-3 fill-gray-500 translate-y-[1px]" /></span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
