<template>
    <div class="mx-36 my-5 text-xl font-bold">
        This is blog page
        <div class="my-5 bg-gray-200 px-10 py-5 rounded">
            <p class="my-2">Count: <span>{{ countedValue }}</span></p>
            <button @click="increaseCount" class="bg-green-600 font-bold px-4 py-2 rounded text-white">Increase Count</button>
            <button @click="decreaseCount" class="bg-green-600 font-bold px-4 py-2 rounded text-white mx-2">Decrease Count</button>
        </div>
    </div>
</template>

<script setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'
const countedValue = ref(0)
let interval;
const increaseCount = ()=>{
    countedValue.value++
}
const decreaseCount = ()=>{
    countedValue.value--
    console.log(countedValue.value)
}

onMounted(()=>{
    interval = setInterval(()=>{
        decreaseCount()
    },1000)
    console.log("mounted: Component has been mounted to the DOM.")
})
onBeforeMount(()=>{
    console.log("Before Mount : Component is about to be mounted to the DOM")
})

onBeforeUpdate(() => {
  console.log("beforeUpdate: Component is about to re-render due to data changes.", countedValue.value)
})

onUpdated(() => {
  console.log("updated: Component has been re-rendered and the DOM is updated.", countedValue.value)
})

onBeforeUnmount(() => {
  alert("Cleaning up interval before unmounting")
  clearInterval(interval)
})

onUnmounted(()=>{
    console.log("Hello world")
})

</script>