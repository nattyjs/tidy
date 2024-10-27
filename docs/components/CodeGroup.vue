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
}
</script>

<template>
  <div class="border rounded-md">
    <div class="flex items-center justify-between">
      <div class="flex">
        <button
          class="px-5 py-1 ms-2 my-2 rounded-md flex gap-x-2 items-center"
          :class="{ 'bg-gray-100': index == selectedIndex }"
          v-for="(tab, index) in tabs"
          :key="index"
          tabindex="-1"
          @click="selectedIndex = index"
        >
          <div>
            <span v-if="tab.label == 'Form.vue'">
              <vue-icon class="w-4" />
            </span>
            <span v-if="tab.label == 'Form.svelte'">
              <svelte-icon class="w-4"/>
            </span>
          </div>
          <span>{{ tab.label }}</span>
        </button>
      </div>
      <span class="px-2" @click="copytoclipboard"> <copy-icon class="w-4 fill-gray-500 cursor-pointer hover:fill-gray-700"/></span>
    </div>
    <div class="px-5 py-2 bg-gray-50 rounded-md">
      <component :is="selectedTab?.component" :key="selectedIndex" />
    </div>
  </div>
</template>


<style scoped>
/* Add your scoped styles here */
</style>
