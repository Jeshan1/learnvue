<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import Tab1Component from "./TabComponent.vue";
import Tab2Component from "./Tab2Component.vue";
import Tab3Component from "./Tab3Component.vue";
import TabComponent from "./TabComponent.vue";

//  dropdown state 
const dropdownVisible = ref(false);

// Route navigation
const router = useRouter();

// Close the dropdown and navigate to the selected route
function handleRouteClick(route) {
  router.push(route); // Navigate to the selected route
  dropdownVisible.value = false; // Close the dropdown after route selection
}


</script>


<template>
    <nav id="nestedNav" class="mx-10 my-10">
      <!-- Link to routes; dropdown will toggle when clicked -->
      <button @click="dropdownVisible = !dropdownVisible" class="bg-green-600 text-white px-4 py-2 rounded">
        Toggle Dropdown 
      </button>

      <div v-if="dropdownVisible" class="dropdown">
        <ul>
          <li @click="handleRouteClick('/about/profile')">
            Profile
          </li>
          <li @click="handleRouteClick('/about/settings')">
            Settings
          </li>
        </ul>
      </div>
    </nav>

    <div class="mx-36 my-5">
      <h1 v-if="$route.path === '/about'" class="text-xl font-bold text-blue-600">About Page</h1>
      <router-view/>
    </div>

    <!-- dynamic tab rendered  -->
    <div class="mx-36 my-5" v-if="$route.path === '/about'">
        <TabComponent>
            <Tab1Component  />
            <Tab2Component />
            <Tab3Component />
        </TabComponent>
    </div>
        
</template>

<style>
.dropdown {
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

</style>

