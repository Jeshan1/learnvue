<script setup>
import {onMounted, reactive,ref} from 'vue'
import axios from 'axios';

const state =  reactive({
    data:[],
    loading:true,
    error:null
})

const data = reactive({
    cat_name:null,
})

const isModalOpen = ref(false);
const categoryData = reactive({
      cat_name:null,
      id:null
})

//create new category
const handleCreateCategory = async() =>{
   try {
    const response = await axios.post('http://localhost:8000/api/category',{
        cat_name:data.cat_name,
    });
    console.log(response.data)
    state.data = [...state.data, response.data.data]
    data.cat_name = null
    console.log(state.data)
   } catch (error) {
    console.log("Error occred when creating category : ", error.message)
   }
}

//delete category
const deleteCategory = async(id)=>{
    try {
        await axios.delete(`http://localhost:8000/api/category/${id}`)
        state.data = state.data.filter(data=>data.id!=id)
    } catch (error) {
        console.log("Error occured when deleting category: ", error.message)
    }
}

//open modal
const openModal = (item)=>{
    isModalOpen.value = true
    categoryData.cat_name = item.cat_name,
    categoryData.id =  item.id
}

//close modal
const closeModal = ()=>{
    isModalOpen.value = false
    categoryData.cat_name = '',
    categoryData.id = null
}



const handleUpdateCategory = async () => {
    try {
        if (!categoryData.id) {
            console.log("No category id to update");
            return; // Do not proceed if there's no valid id
        }

        const response = await axios.put(`http://localhost:8000/api/category/${categoryData.id}`, {
            cat_name: categoryData.cat_name
        });

        const updatedCategory = response.data.data;
        
        console.log('Updated category:', updatedCategory); 

        const index = state.data.findIndex(data => data.id === categoryData.id);
        if (index !== -1) {
            const updatedCategory = response.data.data;
            state.data = [
                ...state.data.slice(0, index),
                updatedCategory,
                ...state.data.slice(index + 1)
            ];
        }
        else {
            console.log('Category not found for update');
        }

        closeModal();
    } catch (error) {
        console.log("Error occurred when updating category: ", error.message);
    }
};

// fetch categories
onMounted(async()=>{
    try {
        const response = await axios.get('http://localhost:8000/api/category');
        console.log(response.data.data)
        state.data = response.data.data
    } catch (error) {
        state.error = error.message
    }
    finally{
        state.loading = false
    }
})
</script>

<template>
    <div class="mx-10 my-5 bg-slate-200 p-5 rounded">
        <div class="bg-white p-5 rounded shadow-xl">        
            <!-- create new category form  -->
            <h1 class="text-2xl font-bold text-center text-blue-600">Add Category</h1>
            <form class="w-full" @submit.prevent="handleCreateCategory" method="post">
                
                <div>
                    <label for="" class="text-md text-blue-600 font-bold">Category Name</label>
                    <input type="text" name="cat_name" v-model="data.cat_name" placeholder="Type a category name" class="block bg-[whitesmoke] w-full h-10 px-4 text-sm rounded my-3 text-blue-600 outline-none">
                </div>
                <div>
                    <button type="submit" class="bg-blue-600 text-lg font-bold px-4 py-2 rounded text-white outline-none">Add Category</button>
                </div>
            </form>
        </div>

        <!-- getting categories  -->

        <div class="bg-white my-5 p-5">
            <h1 class="text-xl font-bold text-blue-600">Categories</h1>
            <table class="bg-[whitesmoke] p-4 w-full">
                <h1 v-if="state.loading">Loading...</h1>
                <thead class="bg-blue-600 text-white">
                    <tr class="flex">
                        <th class="flex-1">Id</th>
                        <th class="flex-1">Category Name</th>
                        <th class="flex-1">Action</th>
                    </tr>
                </thead>
                <tbody class="w-[100%]" v-if="!state.loading && state.data.length > 0"> 
                    <tr v-for="item in state.data" :key="item.id" class="flex text-center bg-white border-2 text-blue-600 py-4">
                        <td class="flex-1">{{ item.id }}</td>
                        <td class="flex-1">{{ item.cat_name }}</td>
                        <td class="flex-1">
                            <button class="inline" @click="deleteCategory(item.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                                    <g fill="#db0b1e" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M10,2l-1,1h-6v2h1.10938l1.7832,15.25586v0.00781c0.13102,0.98666 0.98774,1.73633 1.98242,1.73633h8.24805c0.99468,0 1.8514,-0.74968 1.98242,-1.73633l0.00195,-0.00781l1.7832,-15.25586h1.10938v-2h-6l-1,-1zM6.125,5h11.75l-1.75195,15h-8.24805z"></path></g></g>
                                </svg>
                            </button>
                            <button class="inline ml-3" @click="openModal(item)">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                                    <g fill="#3733f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M22.82813,3c-0.51175,0 -1.02356,0.19544 -1.41406,0.58594l-2.41406,2.41406l5,5l2.41406,-2.41406c0.781,-0.781 0.781,-2.04713 0,-2.82812l-2.17187,-2.17187c-0.3905,-0.3905 -0.90231,-0.58594 -1.41406,-0.58594zM17,8l-11.74023,11.74023c0,0 0.91777,-0.08223 1.25977,0.25977c0.342,0.342 0.06047,2.58 0.48047,3c0.42,0.42 2.64389,0.12436 2.96289,0.44336c0.319,0.319 0.29688,1.29688 0.29688,1.29688l11.74023,-11.74023zM4,23l-0.94336,2.67188c-0.03709,0.10544 -0.05623,0.21635 -0.05664,0.32813c0,0.55228 0.44772,1 1,1c0.11177,-0.00041 0.22268,-0.01956 0.32813,-0.05664c0.00326,-0.00128 0.00652,-0.00259 0.00977,-0.00391l0.02539,-0.00781c0.00196,-0.0013 0.00391,-0.0026 0.00586,-0.00391l2.63086,-0.92773l-1.5,-1.5z"></path></g></g>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal for editing category -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
            <div class="bg-white p-5 rounded shadow-xl w-96">
                <h2 class="text-xl font-bold mb-3">Edit Category</h2>
                <input type="hidden" v-model="categoryData.id">
                <input
                v-model="categoryData.cat_name"
                type="text"
                placeholder="Edit category name"
                class="block w-full h-10 px-4 text-sm rounded mb-3"
                />
                <div class="flex justify-between">
                    <button @click="closeModal" class="bg-gray-500 text-white py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button @click="handleUpdateCategory" class="bg-blue-600 text-white py-2 px-4 rounded">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>