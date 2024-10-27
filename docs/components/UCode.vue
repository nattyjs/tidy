
<script setup lang="ts">
import { defineProps } from "vue";
import copyIcon from "./icon/copy.icon.vue";

let copied = false
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
  () => slots.default?.()?.flatMap(transformSlot).filter(Boolean)[0] || {}
);

function copytoclipboard() {
  const code = tabs?.value.component.props.code;
  navigator.clipboard.writeText(code);
}

console.log(tabs.value);
</script>

<template>
  <div class="relative border rounded-md">
    <div class="flex items-center justify-between px-2 pt-2">
      <div>
        <button v-if="tabs.label !== '0'" class="text-gray-700 text-sm tracking-wide ps-3">{{ tabs.label }}</button>
      </div>
      <span  @click="copytoclipboard"><copy-icon class="w-4 fill-gray-500 hover:fill-gray-700 cursor-pointer pb-2"/></span>
    </div>
    <div class="px-5 py-2 bg-gray-50 rounded-b-md">
      <component :is="tabs?.component" :key="tabs.label" />
    </div>
  </div>
</template>
