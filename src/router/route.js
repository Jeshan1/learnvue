import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/HomeComponent.vue'
import About from '../components/AboutComponent.vue'
import Blog from '../components/BlogComponent.vue'
import Profile from "../components/ProfileComponent.vue";
import Setting from "../components/SettingComponent.vue"
import Pinia from "../components/PiniaComponent.vue"
import Contact from "../components/ContactComponent.vue"
import Task from "../components/TaskComponent.vue";
import Validation from "../components/ValidationComponent.vue"
import Test from "../components/TestComponent.vue"
const routes = [
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/about',
        name:'About',
        component:About,
        children: [
            {
                path: 'profile', // This will be '/about/profile'
                name: 'Profile',
                component: Profile
            },
            {
                path: 'setting', // This will be '/about/settings'
                name: 'Setting',
                component: Setting
            }
        ]
    },
    {
        path:'/blogs',
        name:'Blog',
        component:Blog,
    },
    {
        path:'/pinia',
        name:'Pinia',
        component:Pinia
    },
    {
        path:'/contact',
        name:'Contact',
        component:Contact
    },
    {
        path:'/tasks',
        name:'Task',
        component:Task
    },
    {
        path:'/validations',
        name:'Validation',
        component:Validation
    },
    {
        path:'/tests',
        name:'Test',
        component:Test
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router