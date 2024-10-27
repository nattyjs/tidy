<script setup lang="ts">
import facebookIcon from "./icon/facebook.icon.vue";
import githubIcon from "./icon/github.icon.vue";
import discordIcon from "./icon/discord.icon.vue";
import twitterIcon from "./icon/twitter.icon.vue";
</script>

<template>
  <footer class="border-t sticky bottom-0 left-0 bg-white z-20">
    <div class="py-5 max-lg:py-10">
      <div class="max-w-7xl mx-auto px-6">
        <div
          class="lg:flex items-center lg:justify-between sm:max-md:flex-col sm:max-md:items-center max-lg:space-y-5"
        >
          <p
            class="text-sm font-DMSans_Regular text-gray-500 max-lg:text-center lg:text-center md:order-2 lg:order-1"
          >
           <a href="https://radixweb.com/" class="hover:underline"">Developed & Maintained By <b>Radixians</b></a>
          </p>
          <div
            class="flex items-center lg:pe-4 space-x-4 max-lg:text-center lg:text-center md:order-1 lg:order-2"
          >
            <span><a href="https://github.com/nattyjs/tidy"><github-icon class="w-5 fill-gray-700 cursor-pointer" /></a></span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
