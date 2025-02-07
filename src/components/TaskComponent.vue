<template>
    <div class="mx-10 my-5">
        <h1>Tasks</h1>
        <p>Pending Tasks : {{ pendingTask }}</p>
        <p>Completed Tasks : {{ completedTask }}</p>

        <div>
            <input type="text" v-model="newTask" placeholder="Enter a new task" class="bg-slate-600 px-4 py-2 text-xl font-bold rounded text-blue-600">
            <button @click="addNewTask" class="bg-blue-600 text-xl font-bold px-4 py-2 rounded text-white mx-3">Add New Task</button>
        </div>

        <ul class="w-[16%] my-5 bg-slate-200 p-5">
            <li v-for="task in tasks" :key="task.id" class="flex justify-between bg-white my-2 p-2">
                <span @click="markCompleted(task.id)" :class="{ completed:task.completed}">{{ task.text }}</span>
                <button @click="removeTask(task.id)" class="bg-red-600 text-white p-2 rounded-lg" v-if="task">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import {useTaskStore} from "../store/TaskStore"
let newTask = ""
const store = useTaskStore()
const {tasks,pendingTask,completedTask} = storeToRefs(store)
const {addTask,toggleTaskCompleted,toggleTaskRemove} = store

function addNewTask(){
    if (newTask.trim()) {
        addTask(newTask)
        newTask = ""
    }
}

function markCompleted(taskid){
    toggleTaskCompleted(taskid)
}

function removeTask(taskid){
    toggleTaskRemove(taskid)
}
</script>

<style>
.completed{
    text-decoration: line-through;
    color: gray;
}
</style>