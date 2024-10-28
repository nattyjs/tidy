<script setup lang="ts">
import CodeGroup from "~/components/CodeGroup.vue";
import UButton from "~/components/UButton.vue";
import TocLinks from "~/components/TocLinks.vue";
import UCode from "~/components/UCode.vue";
import rightArrowIcon from "~/components/icon/right-arrow-icon.vue";
import { onMounted } from 'vue';
// import hljs from "highlight.js";

const route = useRoute();
const components = {
  "code-group": CodeGroup,
  "u-button": UButton,
  "u-code":UCode
};

// onMounted(() => {
//   const blocks = document.querySelectorAll('pre code');
//   blocks.forEach((block) => {
//     hljs.highlightElement(block);
//   });
// });

definePageMeta({
  layout: "docs",
});

const { data:page } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryContent()
    .where({ _extension: "md", navigation: { $ne: false } })
    .only(["title", "description", "_path"])
    .findSurround(route.path)
);

const toclinks = page?.value.body.toc.links;


const [prev, next] = surround.value || [];

console.log(page.value)

console.log(page.value?._dir)
// const headline = page?.value?._dir?.split('-').map((p)=>(p[0].toUpperCase()+p.slice(1))).join(' ')
// const headline = computed(() => {
//   return (page.value._dir).split('-').map((p)=>(p[0].toUpperCase()+p.slice(1))).join(' ')
// })


</script>

<template>
  <div class="flex gap-x-8">
    <div class="content w-9/12 py-5 pb-20">
    <div class="border-b pb-3 mb-3">
      <h2 class="text-4xl font-semibold py-5">{{ page?.title }}</h2>
      <h5 class="text-lg text-gray-500 tracking-wide leading-7 pb-5">{{ page?.description }}</h5>
    </div>
      <ContentRenderer v-if="page" :value="page" :components="components"  id="contentrenderer" />
        <!-- <ContentRendererMarkdown id="contentrenderer" :value="page" :components="components" />
      </ContentRenderer> -->
      <hr v-if="surround?.length" />
      <div v-if="surround" class="surround-div flex justify-end my-5 gap-x-5">
        <div v-if="prev" class="prev w-1/2 border rounded-md hover:bg-gray-50 group px-5 py-4 transition-all duration-300">
          <NuxtLink :to="prev._path">
            <div v-if="prev" class="surround-prev space-y-3 py-2">
              <div class="bg-slate-100 group-hover:bg-green-50 group-hover:border-green-400 px-2 py-2 transition-all duration-300 w-fit rounded-full border"><right-arrow-icon class="w-5 stroke-gray-900 group-hover:stroke-green-500 rotate-180"/></div>
              <h5 class="text-gray-800 font-medium">{{ prev.title }}</h5>
              <p class="text-sm text-gray-400">{{ prev.description.slice(0,80)+'...' }}</p>
            </div>
          </NuxtLink>
        </div>
        <div v-if="next" class="next text-right w-1/2 border rounded-md hover:bg-gray-50 px-5 py-4 group transition-all duration-300">
          <NuxtLink :to="next._path">
            <div v-if="next" class="surround-next space-y-3 flex py-2 flex-col items-end">
              <div class="bg-slate-100 group-hover:bg-green-50 group-hover:border-green-400 px-2 py-2 transition-all duration-300 w-fit rounded-full border"><right-arrow-icon class="w-5 stroke-gray-900 group-hover:stroke-green-500"/></div>
              <h5 class="text-gray-800 font-medium">{{ next.title }}</h5>
              <p class="text-sm text-gray-400">{{ next.description.slice(0,80)+'...' }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="3/12 relative pe-5 pb-3">
      <div class="right-bar min-w-48 max-w-48 sticky right-0 top-24 max-h-[calc(100vh-110px)] overflow-y-auto" v-if="toclinks.length>1">
        <TocLinks :toclinks="toclinks" />
      </div>
    </div>
  </div>
</template>

<style>
#contentrenderer h1{
  font-size: 2rem;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 20px;
  /* background-color: red */
}
#contentrenderer h2{
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 5px;
}
#contentrenderer h3{
  font-size: 1.25rem;
  font-weight: 600;
  color:  rgb(0, 0, 0);
  padding-top: 20px;
}
#contentrenderer h4{
  font-size: 1rem;
  font-weight: 600;
  padding-top: 15px;
  /* color: rgb(55 65 81); */
}
#contentrenderer p{
  font-size: 1rem;
  color: rgb(55 65 81);
  padding: 15px 0;
  line-height: 1.5rem;
  letter-spacing: 0.01em;
  text-align: justify;
}
#contentrenderer p a{
  color: #00C16A;
}
#contentrenderer li a{
  color: #00C16A;
}
#contentrenderer ul{
  padding: 5px 0;
}
#contentrenderer ul li strong{
  font-size: 1rem;
  color: black;
  padding: 20px 0;
  font-weight: 500;
}
#contentrenderer ol li strong{
  font-size: 1rem;
  color: black;
  padding: 20px 0;
  font-weight: 500;
  letter-spacing: 0.02rem;
}
#contentrenderer ul li {
  font-size: 1rem;
  color: rgb(55, 65, 81);
  padding: 3px 0;
  list-style: none;
  margin-left: 1rem;
  padding-left: 1rem;
}
#contentrenderer ol li ul li {
  font-size: 1rem;
  color: rgb(55, 65, 81);
  padding: 3px 0;
  list-style: none;
  margin-left: 1rem;
  padding-left: 1rem;
}

#contentrenderer ul li::marker {
  content: '•';
  font-size: 1.2rem;
  color: rgb(209 213 219);
}
#contentrenderer ol li ul li::marker {
  content: '•';
  font-size: 1.2rem;
  color: rgb(209 213 219);
}

#contentrenderer ol li {
  font-size: 1rem;
  color: rgb(55 65 81);
  padding: 5px 0;
  list-style: decimal;
  margin-left: 20px;
}
#contentrenderer table {
  font-size: 1rem;
  width: 75%;
  margin: 15px 0;
}
#contentrenderer table thead{
  text-align: center;
}
#contentrenderer table tbody{
  text-align: left;
}
#contentrenderer table thead tr th{
  font-size: 0.9rem;
  color: rgb(17 24 39);
  border-bottom: 1px solid  rgb(209 213 219);
  padding: 10px 10px;
  font-weight: 500;
}
#contentrenderer table tbody tr{
  border-bottom: 1px solid rgb(229 231 235);
}
#contentrenderer table tbody tr:last-child {
  border-bottom: none;
}
#contentrenderer table tbody tr td{
  font-size: 0.9rem;
  color: rgb(55 65 81);
  padding: 8px 6px;
}
#contentrenderer pre  {
  max-width: 640px;
  overflow-x: auto;
}
#contentrenderer pre code {
  font-size: 0.9rem;
}
#contentrenderer p code {
    color: rgb(31 41 55);
    font-weight: 600;
    font-size: 0.875em;
    background-color: rgb(248 250 252);
    padding: 0 0.375rem;
    display: inline-block;
    border-radius: 0.375rem;
    border: 1px solid rgb(203 213 225);
}
#contentrenderer li code {
    color: rgb(31 41 55);
    font-weight: 600;
    font-size: 0.875em;
    background-color: rgb(248 250 252);
    padding: 0 0.375rem;
    display: inline-block;
    border-radius: 0.375rem;
    border: 1px solid rgb(203 213 225);
}
#contentrenderer a code {
    color: rgb(31 41 55);
    font-weight: 600;
    font-size: 0.875em;
    background-color: rgb(248 250 252);
    padding: 0 10px;
    display: inline-block;
    border-radius: 0.375rem;
    border: 1px solid rgb(203 213 225);
    border-style: dashed;
}
 hr{
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
::-webkit-scrollbar {
  height: 4px;
  width: 10px;
}
::-webkit-scrollbar-track {
  background: rgba(216, 214, 214, 0.658);
}
::-webkit-scrollbar-thumb {
  background: rgba(161, 160, 160, 0.603);
}

.right-bar::-webkit-scrollbar {
  width: 2px;
}
.right-bar::-webkit-scrollbar-track {
  background: white;
}
.right-bar::-webkit-scrollbar-thumb {
  background: white;
}
.right-bar::-webkit-scrollbar-thumb:hover {
  background: white;
}

</style>

