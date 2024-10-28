<script setup lang="ts">
import GithubIcon from "./icon/github.icon.vue";
import ContentSearchButton from './ContentSearchButton.vue'
</script>

<template>
  <header class="sticky top-0 left-0 bg-white bg-opacity-95 z-50">
    <div class="py-4 border-b">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <nav class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/">
            <h1 class="text-xl xl:text-xl font-bold cursor-pointer">@tidy</h1>
          </NuxtLink>
            <span
              class="px-2 ms-1.5 ring-1 ring-inset rounded-md text-xs py-1 text-center ring-green-300 bg-green-50 text-green-500 font-medium"
              >Docs</span
            >
          </div>
          <ContentSearchButton />
          <div class="space-x-5 flex items-center">
            <span>
             <a href="https://github.com/nattyjs/tidy" target="_blank"> <github-icon class="w-5 fill-gray-700 cursor-pointer" /></a>
            </span>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
