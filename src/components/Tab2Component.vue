<template>
  <div>
    <h2 :title="titleRef" @updateTitle="handleUpdateTitle">{{ titleRef }}</h2>
    <p>Here you can put any dynamic content related to Tab 2.</p>
  </div>
  <div>
      <slot></slot>
  </div>
</template>

<script setup>
 import { ref } from 'vue'

 const titleRef = ref('Initial title')

 // Function to handle the title update
 const handleUpdateTitle = (newTitle) => {
    titleRef.value = newTitle
 }
</script>
