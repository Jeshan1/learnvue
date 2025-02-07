
<template>
    <!-- all card  -->
    <div v-for="(item,index) in items" :key="index" class="p-5 bg-slate-300 rounded shadow-xl" typeof="all">
        <div>
            <h1>{{ item.name }}</h1>
            <p>{{ item.age }}</p>
        </div>
    </div>
    <!-- filtered card  -->
    <div>
        <h1 class="text-xl font-bold my-5 text-blue-600 hover:text-blue-800 cursor-pointer">Filtered Card</h1>
        <div v-for="(item,index) in filteredItems" :key="index" class="p-5 bg-slate-300 rounded shadow-xl">
        <div>
            <h1>{{ item.name }}</h1>
            <p>{{ item.age }}</p>
        </div>
    </div>
    </div>

</template>

<script setup>
import {computed} from 'vue'
const items = [
    {
        "name":"Jeshan Tiwari",
        "age":20
    },
    {
        "name":"Jeshan Tiwari",
        "age":21
    },
    {
        "name":"Jeshan Tiwari",
        "age":22
    }
]

const filteredItems = computed(()=>{
    return items.filter((item)=>item.age > 21)
})
</script>