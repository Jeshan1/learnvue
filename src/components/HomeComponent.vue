<!-- 
<script setup>
import { defineProps } from "vue";
import NavComponent from '../components/NavComponent.vue'
defineProps({
    logo:String
})

const navbarItems = {
  home: { name: "Home", link: "/" },
  about: { name: "About", link: "/about" },
  blogs: { name: "Blogs", link: "/blogs" },
  contact: { name: "Contact", link: "/contact" }
};


</script>

<template>

    <NavComponent :navbarItems = "navbarItems" />
  
</template> -->

<!-- components/NavComponent.vue -->
<!-- views/HomeComponent.vue -->
<!-- views/HomeComponent.vue -->

<script setup>
  import ChildComponent from './ChildComponent.vue'
  import {ref} from 'vue'
  let messageFromChild = ref('')
  const handleChildClick = (message)=>{
        messageFromChild.value = message
  }
</script>
<template>
    <div>
      <!-- Page content -->
      <div class="p-10">
        <h2 class="text-2xl font-bold">Welcome to Home Page</h2>
        <p class="text-lg mt-4">This is the main content of the home page.</p>
        <p v-if="messageFromChild" class="mt-5 text-lg text-green-600">{{ messageFromChild }}</p>
      </div>
    </div>
    <!-- childcomponent  -->
    <ChildComponent @childClick="handleChildClick" />
</template>
  
  
  
  
  
 
  
