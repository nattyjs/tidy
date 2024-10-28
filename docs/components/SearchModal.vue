<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useFetch } from '#app'
  import SearchIcon from './icon/search.icon.vue'
  import DocumentIcon from './icon/document.icon.vue'
  import { DEFAULT_SEARCH_DATA } from '~/consts/DefaultSearchData'
  const query = ref('')
  const searchResults = ref<any[] | null>(DEFAULT_SEARCH_DATA)
  const inputRef = ref<HTMLInputElement | null>(null)
  const onSearch = async () => {
    if (query.value != '') {
      const { data } = await useFetch('/api/search.json', {
        params: { q: query.value },
      })
      searchResults.value = data.value
    } else {
      searchResults.value = DEFAULT_SEARCH_DATA
    }
  }
  onMounted(() => {
    inputRef.value?.focus()
  })
</script>

<template>
  <div class="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="w-[40vw] h-[50vh] flex flex-col bg-white rounded-lg shadow-lg">
      <header class="flex items-center pt-2 px-4 border-b">
        <span>
          <search-icon class="w-5 stroke-gray-400" />
        </span>
        <input
          ref="inputRef" v-model="query" type="text" class="w-full p-2 rounded-md border-none outline-none"
          placeholder="Type to search..." @input="onSearch"
        >
        <button class="text-gray-400 hover:text-gray-600 text-xl font-semibold" @click="$emit('close')">
          ✕
        </button>
      </header>

      <ul v-if="searchResults && searchResults.length" class="space-y-2 max-h-[44vh] overflow-y-scroll pl-4">
        <li v-for="(result, idx) in searchResults" :key="idx">
          <div v-if="result.name" class="my-2">
            <span class="text-black font-medium">{{ result.name }}</span>
          </div>
          <NuxtLink
            v-for="link in result.items" :key="link.link" :to="link.link"
            class="flex items-center space-x-2 overflow-hidden text-ellipsis p-1 rounded-md hover:bg-gray-200/50 group"
            @click="$emit('close')"
          >
            <document-icon class="w-4 h-4 stroke-gray-400 text-gray-500 group-hover:text-gray-800 bg-transparent fill-transparent" />
            <div class="flex-1 min-w-0 flex items-center space-x-1 text-sm">
              <span class="text-gray-700 group-hover:text-black whitespace-nowrap">{{ link.title }}</span>
              <span v-if="link.description" class="text-slate-400 truncate">- {{ link.description }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <p v-else class="h-full text-gray-500 flex justify-center items-center">
        We couldn't find any items with that term. Please try again.
      </p>
    </div>
  </div>
</template>

<style scoped>
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
</style>
