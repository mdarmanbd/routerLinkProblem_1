<script setup>
import {ref,watch} from "vue"
import { useRoute } from "vue-router";
const route  = useRoute()

let id = ref(route.params.id)

watch(()=> route.params.id,(newVal)=>{
    id.value = newVal
    
})



</script>

<template>
    {{ id }}
    <h2 class="text-center bg-green-300">hello liberay</h2>
</template>