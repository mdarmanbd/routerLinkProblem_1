
<script setup>
import axios from 'axios'
import{ref,reactive,onMounted} from 'vue'

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
  <section class="w-full">
     Home view
    <div class="w-4/5 mx-auto">
      <div v-for="blogData in blogDatas.data" :key="blogData.id" class="w-3/4 mx-auto">
        <h2>{{ blogData.name }}</h2>
      </div>
      
    </div>
  </section>
</template>
