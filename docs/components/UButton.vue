<template>
  <div class="inline-block pt-2 pb-2">
    <button
      :class="props.class"
      class="bg-[#00C16A] hover:bg-green-600 rounded-md px-3 py-1.5 text-white font-medium me-5 text-sm transition-all duration-300"
    >
      <a :href="props.to" :target="target" class="flex gap-x-1">
        <span><spark-icon class="w-5 fill-white" /></span>
        {{ props.label }}
      </a>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import sparkIcon from "./icon/spark.icon.vue";

const props = defineProps({
  class: {
    type: String as PropType<any>,
    default: "",
  },
  label: {
    type: String as PropType<any>,
    default: "",
  },
  icon: {
    type: String as PropType<any>,
    default: "",
  },
  target: {
    type: String as PropType<any>,
    default: "",
  },
  to: {
    type: String as PropType<any>,
    default: "",
  },
});
</script>
