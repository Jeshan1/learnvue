<template>

    <!-- tab navigation  -->
     <div class="bg-slate-100 px-10 py-5 rounded">
         
            <div class="bg-blue-600 px-4 py-2 mx-2 rounded-t">
               <button v-for="tab in tabs" :key="tab.name" @click="selectTab(tab.name)" :class="{ 'active': selectedTab === tab.name }" class="bg-red-600 text-white font-bold mx-2 px-4 py-2 rounded">
                  {{ tab.label }}
               </button>
            </div>
            <!-- dynamic tab contents  -->
            <div class="bg-white text-blue-600 mx-2 px-4 py-2 rounded-b">
               <component :is="selectedTabContent" />
               <ButtonComponent>
                  <button @click="buttonClick" class="bg-blue-600 px-4 py-2 rounded text-white">Click Me</button>
               </ButtonComponent>
            </div>
             
     </div>

</template>

<script setup>
   import {ref,computed,defineProps,defineEmits} from 'vue'
   import Tab1Component from './Tab1Component.vue'
   import Tab2Component from './Tab2Component.vue'
   import Tab3Component from './Tab3Component.vue'
   import ButtonComponent from './ButtonComponent.vue';
   const selectedTab = ref('tab1')

   const tabs = [
      {'name':'tab1','label':'Tab1'},
      {'name':'tab2','label':'Tab2'},
      {'name':'tab3','label':'Tab3'},
   ]

   const selectedTabContent = computed(()=>{
      const components = {
            'tab1': Tab1Component,
            'tab2' : Tab2Component,
            'tab3' : Tab3Component
         }
         // console.log(components[selectedTab.value])
         return components[selectedTab.value];
   })

   const selectTab = (tabName)=>{
         selectedTab.value = tabName
   }

   const props = defineProps({
      titleRef:String
   })
   const titleRef = ref(props.title)
   const emit = defineEmits('updateTitle')
   
   
   const buttonClick = ()=>{
      titleRef.value = "This is second tab"
      emit("updateTitle", "This is second tab")
   }

   





</script>

<style>
.active {
  background-color: #007bff !important;
  color: white;
}
</style>