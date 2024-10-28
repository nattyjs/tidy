<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';


const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})





provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <Header />
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>
    <Footer />
  </div>
</template>
