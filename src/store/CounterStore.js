import { defineStore } from "pinia";
import {ref, computed} from 'vue'

export const useCounterStore = defineStore('counter',()=>{
    const count = ref(1)    //state
    const doubleCount = computed(()=>count.value *2)       //getter

    function increment(){           //function
        count.value++
    }

    return {count,doubleCount,increment}
})