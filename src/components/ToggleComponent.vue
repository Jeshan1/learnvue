<template>

    <div class="mx-36 bg-blue-600 p-5 rounded-lg">
        <button @click="toggleMessage" class="bg-white text-blue-600 font-bold px-4 py-2 rounded-lg">ShowMessage</button>
        <p v-if="showMessage" class="text-white my-5">Hello, This is a conditional message!</p>
    </div>

</template>

<script setup>

import {ref} from 'vue'

const showMessage = ref(false)

function toggleMessage(){
    showMessage.value = !showMessage.value
}


</script>