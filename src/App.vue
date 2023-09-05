<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import{ref,reactive} from 'vue'

const blogDatas = ref([])
  async function blog(){
  let url = 'https://basic-blog.teamrabbil.com/api/post-categories'

 let res = await axios.get(url)
  blogDatas.value = res
  console.log(res)
}
 blog()


</script>

<template>
  <header>
    <nav class="bg-green-300 flex justify-between px-4 py-1 border border-b-yellow-400">
      <div class="">
        <p class="text-blue-950 font-bold text-lg">MR BLOG</p>
      </div>
      <div v-for="blogData in blogDatas.data" :key="blogData.id" class="text-blue-950 text-lg font-semibold flex space-x-5">
        <RouterLink :to="`/item/${blogData.id}`" >{{ blogData.name }}</RouterLink>

        <!-- <RouterLink to="/about" >About</RouterLink>
        <RouterLink to="/list" >List</RouterLink> -->
    </div>
    </nav> 
  </header>

  <RouterView />
</template>

<style scoped>

</style>
