<template>

    <div class="mx-36 my-10 bg-blue-500 p-5 rounded-lg">
        <form action="" class="">
            <div>
                <label for="name" class="text-white font-bold">User Name: <span class="text-white-600 font-bold text-xl">{{ name }}</span></label>
                <input type="text" name="name" value="name" v-model="name" class="block w-full px-4 py-2 rounded-lg text-blue-600 my-4 border-none outline-none">
            </div>
            <div>
                <button v-bind:disabled="isButtonDisabled" class="bg-green-600 text-white font-bold px-4 py-2 rounded-lg">Submit</button>
            </div>
        </form>
    </div>

</template>

<script setup>
    import {ref} from 'vue'
    const name = ref("")
    const isButtonDisabled = ref(true)
</script>