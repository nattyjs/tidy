<script setup lang="ts">
import { computed, PropType, ref, useSlots } from "vue";
import VueIcon from "./icon/vue.icon.vue";
import SvelteIcon from "./icon/svelte.icon.vue";
import CopyIcon from "./icon/copy.icon.vue";

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
});

const slots = useSlots();
const selectedIndex = ref(0);
const isCopied = ref(false);

function transformSlot(slot: any, index: number) {
  if (typeof slot.type === "symbol") {
    return slot.children?.map(transformSlot);
  }

  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot,
  };
}

// Computed
const tabs = computed(
  () => slots.default?.()?.flatMap(transformSlot).filter(Boolean) || []
);
const selectedTab = computed(() => tabs.value[selectedIndex.value]);
function copytoclipboard() {
  const code = selectedTab?.value.component.props.code;
  navigator.clipboard.writeText(code);
  isCopied.value = true;
  setTimeout(() => {
      isCopied.value = false;
    }, 1000);
}

</script>

<template>
  <div class="border rounded-md my-2.5">
    <div class="flex items-center justify-between border-b">
      <div class="flex">
        <button
          class="px-2 py-1.5 ms-2 my-2 text-sm text-gray-700 rounded-md flex gap-x-2 items-center"
          :class="{ 'bg-slate-100': index == selectedIndex }"
          v-for="(tab, index) in tabs"
          :key="index"
          tabindex="-1"
          @click="selectedIndex = index"
        >
          <div>
            <span v-if="tab.label == 'Form.vue'">
              <vue-icon class="w-3.5" />
            </span>
            <span v-if="tab.label == 'Form.svelte'">
              <svelte-icon class="w-3.5"/>
            </span>
          </div>
          <span>{{ tab.label }}</span>
        </button>
      </div>
      <div
      class="px-2 relative group" @click="copytoclipboard"> <copy-icon class="w-4 fill-gray-500 cursor-pointer" :class="{'fill-gray-800':isCopied}"/>
      <span v-if="!isCopied" class="absolute -right-10 -top-7 px-2 py-[3px] invisible opacity-0 group-hover:opacity-100 group-hover:visible text-nowrap text-xs text-gray-600 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-300">Copy to clipboard</span>
      <span v-if="isCopied" class="absolute -right-3 -top-7 px-2 py-[3px] text-nowrap text-xs text-gray-600 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-300">Copied</span>
      </div>
    </div>
    <div class="px-5 py-3 bg-gray-50 rounded-md">
      <component :is="selectedTab?.component" :key="selectedIndex" />
    </div>
  </div>
</template>


<style scoped>
/* Add your scoped styles here */
</style>
