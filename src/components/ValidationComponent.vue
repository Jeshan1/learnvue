<script setup>
import {computed, reactive} from 'vue'
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, maxLength, sameAs, between, numeric, url } from '@vuelidate/validators';

const state = reactive({
  name:'',
  email:'',
  password:'',
  confirm_password:'',
  phone:'',
  age:'',
  website:'',
  country:'',
  gender:'',
  terms:false
})

const rules = computed(() => ({
  name: { required },
  email: { required, email },
  password: { required, minLength: minLength(6), maxLength: maxLength(15) },
  confirm_password: { required, sameAs: sameAs(state.password) },
  phone: { required, minLength:minLength(10),maxLength:maxLength(10)},
  age: { required, numeric:numeric, between:between(18,60)},
  website:{required, url:url},
  country : {required},
  gender:{required},
  terms:{sameAs:sameAs(true)}
}));

  
const $v = useVuelidate(rules,state)

const handleFormSubmit = async()=>{
  const isvalid = await $v.value.$validate()
  if (!isvalid) {
    console.log("Form is invalid")
    return
  }
  console.log("Form is valid")
  Object.assign(state,{
    name:'',
    email:'',
    password:'',
    confirm_password:'',
    phone:'',
    age:'',
    website:'',
    country:'',
    gender:'',
    terms:''
  })
   $v.value.$reset()


   const sugarStock=20
   if (sugarStock) {
    alert("I will go for coffee break")
   }
   else{
    alert("I won't go for coffee break")
   }
}

</script>

<template>
  <div class="mx-10 my-5">
      <form @submit.prevent="handleFormSubmit" class=" bg-white shadow-xl px-4 py-4 w-[40%]">
        <!-- name  -->
        <div class="w-full" :class="{error:$v.name.$errors.length}">
          <label for="name" class="text-blue-600 font-bold px-4">Name</label>
          <input type="text" v-model="state.name" id="name" placeholder="Write your name...." class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.name.$errors" :key="error.$uid">
              <p class="text-red-600 text-sm my-2">{{ error.$message }}</p>
          </div>
        </div>
        <!-- email  -->
        <div class="w-full" :class="{error:$v.email.$errors.length}">
          <label for="email" class="text-blue-600 font-bold px-4">Email</label>
          <input type="text" v-model="state.email" id="email" placeholder="Write your email" class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.email.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{error.$message }}</p>
          </div>
        </div>
        <!-- password  -->
        <div class="w-full" :class="{error:$v.password.$errors.length}">
          <label for="password" class="text-blue-600 font-bold px-4">Password</label>
          <input type="text" v-model="state.password" id="password" placeholder="Write your Password" class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.password.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
        <!-- confirm password  -->
        <div class="w-full" :class="{error:$v.confirm_password.$errors.length}">
          <label for="confirm_password" class="text-blue-600 font-bold px-4">Confirm Password</label>
          <input type="text" v-model="state.confirm_password" id="confirm_password" placeholder="Confirm your password" class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.confirm_password.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
        <!-- phone number  -->
        <div class="w-full" :class="{error:$v.phone.$errors.length}">
          <label for="phone" class="text-blue-600 font-bold px-4">Phone Number</label>
          <input type="text" v-model="state.phone" id="phone" placeholder="Type your phone number..." class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.phone.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
        <!-- age  -->
        <div class="w-full" :class="{error:$v.age.$errors.length}">
          <label for="age" class="text-blue-600 font-bold px-4">Age</label>
          <input type="text" v-model="state.age" id="age" placeholder="Confirm your password" class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.age.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
        <!-- website url  -->
        <div class="w-full" :class="{error:$v.website.$errors.length}">
          <label for="website" class="text-blue-600 font-bold px-4">Website</label>
          <input type="text" v-model="state.website" id="website" placeholder="Type your website link" class="my-2 bg-slate-100 block w-[100%] h-10 px-4 py-2 text-md rounded-xl outline-none">
          <div v-for="error of $v.website.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
          <!-- Country (Dropdown) -->
        <div class="w-full" :class="{ error: $v.country.$errors.length }">
          <label class="text-blue-600 font-bold px-4">Country</label>
          <select v-model="state.country" class="input-box">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
          <div v-for="error of $v.country.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
        <!-- Gender (Radio Buttons) -->
        <div class="w-full" :class="{ error: $v.gender.$errors.length }">
          <label class="text-blue-600 font-bold px-4">Gender</label>
          <div class="flex gap-3">
            <label><input type="radio" v-model="state.gender" value="Male" /> Male</label>
            <label><input type="radio" v-model="state.gender" value="Female" /> Female</label>
          </div>
          <div v-for="error of $v.gender.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>

        <!-- Terms & Conditions -->
        <div class="w-full" :class="{ error: $v.terms.$errors.length }">
          <label>
            <input type="checkbox" v-model="state.terms" /> I agree to the terms and conditions
          </label>
          <div v-for="error of $v.terms.$errors" :key="error.$uid">
            <p class="text-red-600 text-sm">{{ error.$message }}</p>
          </div>
        </div>
        <div class="my-3">
          <button type="submit" class="bg-blue-600 text-xl font-bold px-4 py-2 text-white rounded-xl hover:bg-blue-800">Submit</button>
        </div>
      </form>
  </div>
</template>