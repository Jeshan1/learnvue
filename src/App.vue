

<template>

<NavComponent :navbarItems="navbarItems" logo="MyLogo" />
  <router-view></router-view>

</template>

<script setup>
import './assets/tailwind.css'
import NavComponent from "./components/NavComponent.vue";
const navbarItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about",dropdown:[
    {name:"Profile", link:"/about/profile"},
    {name:"Setting", link:"/about/setting"}
  ] },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "Pinia", link: "/pinia" },
  {name:"Task", link:'tasks'},
  {name:"Validation", link:'validations'},
  {name:"Test", link:'tests'}
];

</script>












  <!-- <div class="table m-auto my-5">
    <h1 class="text-2xl font-bold text-blue-600 hover:text-red-600 cursor-pointer">This is Main file. [App]</h1>
  </div> -->

  <!-- card component here  -->

  <!-- <div>
    <h1 class="mx-36 text-xl font-bold text-blue-600 hover:text-blue-800">All Cards</h1>
    <div class="grid grid-cols-3 gap-5 mx-36 my-10">
    <CardComponent/>
  </div>
  </div>

  <div>
    <ToggleComponent/>
  </div>

  <div>
    <ModalComponent/>
  </div>

  <div>
    <FormComponent/>
  </div>

  <div>
    <TodoComponent/>
  </div> -->



  



