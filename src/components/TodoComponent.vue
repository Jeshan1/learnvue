<template>
    <div class="mx-36 my-20">
        <h1 class="text-blue-600 font-bold">Todo List Application </h1>
        <!-- add new task section  -->
        <div class="flex flex-row my-5 gap-5">
            <input type="text" name="task" v-model="newTask" @keyup.enter="addTask" placeholder="Add your task here" class="w-[80%] bg-slate-300 px-4 rounded outline-none">
            <button @click="addTask" class="bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded w-[20%]">Add Task</button>
        </div>

        <!-- filter section here  -->
         <div class="flex gap-5">
            <button @click="filter = 'all'" :class="{active : filter === 'all'}" class="bg-blue-600 text-white px-6 py-2 fong-bold rounded hover:bg-red-600">All</button>
            <button @click="filter = 'active'" :class="{active : filter === 'active'}" class="bg-blue-600 text-white px-6 py-2 fong-bold rounded hover:bg-red-600">Active</button>
            <button @click="filter = 'completed'" :class="{active : filter === 'completed'}" class="bg-blue-600 text-white px-6 py-2 fong-bold rounded hover:bg-red-600">Completed</button>
         </div>

         <!-- listing taks  -->
         <div>
            <ul>
                <li v-for="(task,index) in filteredTasks" :key="index">
                    <div class="flex justify-between my-3 bg-slate-200 px-4 py-2 rounded">
                        <span @click="toggleTask(index)" :class="{completed:task.completed}" class="font-semibold text-blue-600 cursor-pointer">{{ task.text }}</span>
                        <button @click.stop="deleteTask(index)" class="bg-red-600 text-white px-2 py-2 font-bold rounded">Delete Task</button>
                    </div>
                </li>
            </ul>
         </div>
  
    </div>
</template>

<script>

import {ref,computed, onMounted} from 'vue'

export default({
    setup(){
        const newTask = ref('')
        const tasks = ref([])
        const filter = ref('all')

        onMounted(()=>{
            const storedTasks = localStorage.getItem("tasks")
            if (storedTasks) {
                tasks.value = JSON.parse(storedTasks)
            }
        })

        const savedToLocalStorage = ()=>{
            localStorage.setItem("tasks", JSON.stringify(tasks.value))
        }
        
        const addTask = ()=>{
            if (newTask.value.trim()) {
                tasks.value.push({
                    text:newTask.value,
                    completed:false
                })
                newTask.value = ""
                savedToLocalStorage()
            }
        }

        const deleteTask = (index)=>{
            tasks.value.splice(index,1)
            localStorage.setItem("tasks",JSON.stringify(tasks.value))
        }

        //toggling to mark completed
        const toggleTask = (index)=>{
            tasks.value[index].completed = !tasks.value[index].completed
            savedToLocalStorage()
            //console.log('Updated task:', tasks.value[index])
        }

        //flter tasks

        const filteredTasks = computed(()=>{
            if (filter.value === 'active') {
                return tasks.value.filter(task=>!task.completed)
            }
            else if(filter.value === 'completed'){
                return tasks.value.filter(task=>task.completed)
            }
            else{
                return tasks.value
            }
        })

        return{
            addTask,
            deleteTask,
            toggleTask,
            filteredTasks,
            tasks,
            filter,
            newTask
        }
}
})

</script>

<style>
.completed{
    text-decoration: line-through;
    color: gray;
}

.active{
    background-color: green;
}
</style>