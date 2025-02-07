<template>
    <div class="mx-36 my-5">
        <button @click="handleClick" class="bg-blue-600 text-xl font-bold text-white px-4 py-2">Child Button</button>
    </div>
</template>


<script setup>

import {defineEmits} from 'vue'

const emit = defineEmits(['childClick'])
const handleClick = ()=>{
    emit('childClick', "Hello from Child !!")
}

</script>