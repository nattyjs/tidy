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
    <div class="content w-9/12 py-5">
    <div class="border-b">
      <h2 class="text-4xl font-semibold py-5">{{ page?.title }}</h2>
      <h5 class="text-lg text-gray-500 tracking-wide leading-7 pb-5">{{ page?.description }}</h5>
    </div>
      <ContentRenderer v-if="page" :value="page" :components="components"  id="contentrenderer" />
        <!-- <ContentRendererMarkdown id="contentrenderer" :value="page" :components="components" />
      </ContentRenderer> -->
      <hr v-if="surround?.length" />
      <div v-if="surround" class="surround-div flex justify-end my-5 gap-x-5">
        <div v-if="prev" class="prev w-1/2 h-48 border rounded-md hover:bg-gray-50 group px-5 py-4 transition-all duration-300">
          <NuxtLink :to="prev._path">
            <div v-if="prev" class="surround-prev space-y-3">
              <div class="bg-gray-100 group-hover:bg-green-50 group-hover:border-green-200 px-2.5 py-2.5 transition-all duration-300 w-fit rounded-full border"><right-arrow-icon class="w-4 fill-gray-500 rotate-180"/></div>
              <h5 class="text-gray-800 font-medium">{{ prev.title }}</h5>
              <p class="text-sm text-gray-400">{{ prev.description.slice(0,100)+'...' }}</p>
            </div>
          </NuxtLink>
        </div>
        <div v-if="next" class="next text-right w-1/2 h-48 border rounded-md hover:bg-gray-50 px-5 py-4 group transition-all duration-300">
          <NuxtLink :to="next._path">
            <div v-if="next" class="surround-next space-y-3 flex flex-col items-end">
              <div class="bg-gray-100 group-hover:bg-green-50 group-hover:border-green-200 px-2.5 py-2.5 transition-all duration-300 w-fit rounded-full border"><right-arrow-icon class="w-4 fill-gray-500"/></div>
              <h5 class="text-gray-800 font-medium">{{ next.title }}</h5>
              <p class="text-sm text-gray-400">{{ next.description.slice(0,100)+'...' }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="3/12 relative">
      <div class="min-w-52 sticky right-0 top-24" v-if="toclinks.length>1">
        <TocLinks :toclinks="toclinks" />
      </div>
    </div>
  </div>
</template>

<style>
#contentrenderer h1{
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 20px;
}
#contentrenderer h2{
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 10px;
}
#contentrenderer h3{
  font-size: 1rem;
  font-weight: 600;
  color:  rgb(0, 0, 0);
  /* font-weight: 400; */
  padding-top: 20px;
}
#contentrenderer h4{
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 0;
  /* color: rgb(55 65 81); */
}
#contentrenderer p{
  font-size: 1rem;
  color: rgb(55 65 81);
  padding: 15px 0;
}
#contentrenderer p a{
  color: #00C16A;
}
#contentrenderer li a{
  color: #00C16A;
}
#contentrenderer ul{
  padding: 10px 0;
  padding-bottom: 0;
}
#contentrenderer ul li strong{
  font-size: 1rem;
  color: rgb(34 197 94);
  padding: 20px 0;
  font-weight: 400;
}
#contentrenderer ol li strong{
  font-size: 1rem;
  color: rgb(34 197 94);
  padding: 20px 0;
  font-weight: 400;
}
#contentrenderer ul li {
  font-size: 1rem;
  color: rgb(55 65 81);
  padding: 5px 0;
}
#contentrenderer ol li {
  font-size: 1rem;
  color: rgb(55 65 81);
  padding: 5px 0;
  list-style: decimal;
  margin-left: 20px;
}
#contentrenderer ol li code {
  font-size: 1rem;
  color: rgb(55 65 81);
  background-color: rgb(243 244 246);
  padding: 1px 3px;
  border-radius: 5px;
}
#contentrenderer table {
  font-size: 1rem;
  width: 100%;
  border-radius: 50%;
  text-align: left;
}
#contentrenderer table thead{
  background-color: rgb(249 250 251);
  border-radius: 20px;
}
#contentrenderer table thead tr th{
  font-size: 0.9rem;
  color: rgb(75 85 99);
  padding: 10px 20px;
  font-weight: 500;
}
#contentrenderer table tbody tr td{
  font-size: 0.9rem;
  color: rgb(107 114 128);
  padding: 8px 20px;
  border-bottom: 1px solid rgb(243 244 246);
  border-style: dashed;
}
pre  {
  max-width: 640px;
  overflow-x: auto;
}
pre code {
  font-size: 0.9rem;
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
/* ::-webkit-scrollbar-thumb:hover {
  background: gray;
} */
/* pre{
  max-width: 100%;
  overflow-x: hidden;
  background-color: rgba(238, 233, 233, 0.801);
  padding: 10px;
  border-radius: 5px;
} */
/* #contentrenderer pre code{
  border-radius: 5px;
  padding: 20px;
  background-color: rgb(243 244 246);
} */
/* .surround-div{
  display: flex;
  width: 100%;
  column-gap: 10px;
  padding: 10px  0px;

}
.prev{
  width: 50%;
  padding: 5px 10px;
  border: 1px solid rgb(209 213 219);
  border-radius: 5px;
}
.prev h5{
font-weight: 500;
color: rgb(107 114 128);
}
.next{
  width: 50%;
  padding: 5px 10px;
  border: 1px solid rgb(209 213 219);
  border-radius: 5px;
}
.next h5{
font-weight: 500;
color: rgb(107 114 128);
} */


/* main {
  margin-top: 5px;
  display: flex;
}

.content {
  width: 70%;
}
.surround {
  width: 370px;
  padding: 1.5px;
  padding-left: 10px;
  border: 1px solid black;
  height: 150px;
  margin-right: 10px;
}

.surround-div {
  display: flex;
  max-width: 170px;
}

.prev {
  margin-right: 20px;
}
 .next {
  margin-left: 30px;
} */

</style>

