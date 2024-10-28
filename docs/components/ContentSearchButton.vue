<script setup lang="ts">
  import { ref } from 'vue'
  import SearchIcon from './icon/search.icon.vue'
  import SearchModal from './SearchModal.vue'
  const showSearchModal = ref(false)
  const toggleSearch = () => {
    showSearchModal.value = !showSearchModal.value
  }
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault()
      toggleSearch()
    }
  }
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
</script>

<template>
  <button class="border border-gray-300 rounded-md w-96 flex items-center px-2 gap-x-2 text-left hover:bg-gray-300/20" @click="toggleSearch">
    <span>
      <search-icon class="w-5 stroke-gray-400" />
    </span>
    <div
      class="text-sm outline-none w-full py-1.5 text-gray-700/50"
    >
      Search...
    </div>
    <div class="flex gap-x-1">
      <span
        class="text-xs text-gray-600 rounded font-medium px-1 py-[1px] border bg-gray-100 cursor-pointer"
      >Ctrl</span>
      <span class="text-xs text-gray-600 rounded font-medium px-1 py-[1px] border bg-gray-100 cursor-pointer">K</span>
    </div>
  </button>

  <SearchModal v-if="showSearchModal" @close="toggleSearch" />
</template>
