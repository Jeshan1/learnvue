

<template>
    <div class="mx-10 my-5">
        <h1 class="text-xl font-bold my-2">Count : {{ count }}</h1>
        <h2 class="text-xl font-bold my-2">Double Count : {{ doubleCount }}</h2>
        <button @click="increment" class="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded">Increment</button>
    </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useCounterStore} from '../store/CounterStore'
const store = useCounterStore()

store.$patch({
    count:20
})

store.$patch(()=>{
    store.count+=5
})

const {count, doubleCount} = storeToRefs(store)

const {increment} = store

</script>