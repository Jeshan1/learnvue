<template>
    <!-- Button to open the modal -->
    <button @click="openModal" class="mx-36 my-10 bg-blue-600 text-white font-bold px-4 py-2 rounded-xl">
      Open Modal
    </button>
  
    <div v-show="showModal" class="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
      <!-- Modal content -->
      <div class="bg-white p-5 rounded-lg text-blue">
        <h1>This is modal example!!</h1>
        <button @click="closeModal" class="mt-4 bg-red-500 p-2 rounded text-white">Close Modal</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  //ref use to control the modal
  const showModal = ref(false)
  
  // open modal function
  function openModal() {
    showModal.value = true
  }
  
  // close modal function
  function closeModal() {
    showModal.value = false
  }
  </script>
  