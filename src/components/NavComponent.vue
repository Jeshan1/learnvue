<!-- <script setup>
import {defineProps} from 'vue'
defineProps({
    navbarItems:{
        type:Object,
        required:true
    },
    logo: {
    type: String,
    required: true
  }
})

</script>

<template>
    <div class="px-10 py-5 bg-blue-600 text-white text-xl font-bold w-full">
      <div class="flex justify-between items-center">
        <h1>{{ logo }}</h1>
        <ul class="flex space-x-8 flex-nowrap w-full justify-end">
            <li v-for="(value, key) in navbarItems" :key="key">
                <router-link :to="value.link">{{ value.name }}</router-link>
            </li>
        </ul>

      </div>
    </div>
  </template>
  
   -->
<!-- components/NavComponent.vue -->

<!-- components/NavComponent.vue -->
<template>
    <div class="px-10 py-5 bg-blue-600 text-white text-xl font-bold w-full">
      <div class="flex justify-between items-center">
        <h1>{{ logo }}</h1>
        <ul class="flex space-x-8 flex-nowrap">
          <li v-for="(item, index) in navbarItems" :key="index" class="hover:text-slate-200">
            <div @click="toggleDropdown(index)" class="cursor-pointer">
              <router-link :to="item.link">{{ item.name }}</router-link>
            </div>
          <!-- Dropdown Menu for items that have a "dropdown" property -->
          <ul v-if="item.dropdown && item.dropdown.length > 0 && dropdownVisible[index]" 
              class="absolute bg-blue-700 text-white p-2 rounded shadow-lg w-40 mt-2">
            <li 
              v-for="(subItem, subIndex) in item.dropdown" 
              :key="subIndex"
              @click.stop="handleDropdownClick(subItem.link)"
              class="p-2 hover:bg-blue-500 cursor-pointer"
            >
            <router-link :to="subItem.link">{{ subItem.name }}</router-link>
            </li>
          </ul>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
        import {defineProps,ref} from 'vue'
        import {useRouter} from 'vue-router'
        defineProps({
            navbarItems: {
            type: Array,
            required: true
            },
            logo: {
            type: String,
            required: true
            }
        });

        // Reactive dropdown visibility for each item
        const dropdownVisible = ref({});
        const router = useRouter()
        // Toggle the dropdown visibility for the "About" item (or any item with a dropdown)
        function toggleDropdown(index) {
          dropdownVisible.value[index] = !dropdownVisible.value[index];
        }

        // Handle dropdown item click and navigate
        function handleDropdownClick(route) {
          dropdownVisible.value = {};  // Close all dropdowns after selecting a menu item
          // Navigate to the selected route
          router.push(route); 
        }
  </script>


<style>

/* Dropdown menu styling */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
}

.hover\:text-slate-200:hover {
  color: #e5e5e5;
}

.cursor-pointer {
  cursor: pointer;
}

.hover\:bg-blue-500:hover {
  background-color: #3b82f6;
}
</style>
  
  
  
  