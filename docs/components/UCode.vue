
<script setup lang="ts">
import { defineProps } from "vue";
import copyIcon from "./icon/copy.icon.vue";
import terminalIcon from "./icon/terminal.icon.vue";

let copied = false
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
  () => slots.default?.()?.flatMap(transformSlot).filter(Boolean)[0] || {}
);

function copytoclipboard() {
  const code = tabs?.value.component.props.code;
  navigator.clipboard.writeText(code);
  isCopied.value = true;
  setTimeout(() => {
      isCopied.value = false;
    }, 1000);
}

console.log(tabs.value);
</script>

<template>
  <div class="relative border rounded-md my-4">
    <div v-if="tabs.label !== '0'" class="flex items-center justify-between px-2 py-3 border-b">
      <div class="flex items-center gap-x-2 px-3">
        <span v-if="tabs.label !== '0'"><terminal-icon class="w-3.5 fill-gray-600" /></span>
        <button v-if="tabs.label !== '0'" class="text-gray-700 text-sm tracking-wide">{{ tabs.label }}</button>
      </div>
    </div>
    <div :class="{'absolute top-3 right-3':tabs.label !== 0}"  @click="copytoclipboard">
      <div class="relative group">
        <copy-icon class="w-4 fill-gray-500 hover:fill-gray-700 cursor-pointer"/>
        <span v-if="!isCopied" class="absolute -right-11 -top-7 px-2 py-[3px] invisible opacity-0 group-hover:opacity-100 group-hover:visible text-nowrap text-xs text-gray-600 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-300">Copy to clipboard</span>
        <span v-if="isCopied" class="absolute -right-4 -top-7 px-2 py-[3px] text-nowrap text-xs text-gray-600 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-300">Copied</span>
      </div>
    </div>
    <div class="px-5 py-3 bg-gray-50 rounded-b-md rounded-t-md ">
      <component :is="tabs?.component" :key="tabs.label" />
    </div>
  </div>
</template>
