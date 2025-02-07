import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTaskStore = defineStore('task', ()=>{
    const tasks = ref([])

    const pendingTask = computed(()=>{          //getter
        return tasks.value.filter(task => !task.completed).length
    })

    const completedTask = computed(()=>{        //getter
        return tasks.value.filter(task=>task.completed).length
    })

    //actions 

    function addTask(text){             //task add
        const newTask = {
            id:tasks.value.length +1,
            text:text,
            completed:false
        }
        tasks.value.push(newTask);
    }

    const toggleTaskCompleted = (taskid)=>{         //task completed mark
        const task = tasks.value.find(task=>task.id === taskid)
        if (task) {
            task.completed = !task.completed
        }
    }

    const toggleTaskRemove = (taskid)=>{              //task deletion
        tasks.value = tasks.value.filter(task => task.id !== taskid)
    }



    return {tasks,addTask,pendingTask,completedTask,toggleTaskCompleted,toggleTaskRemove}

})