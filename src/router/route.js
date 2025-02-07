import { createRouter,createWebHistory } from "vue-router";

const Home = () => import('@/components/HomeComponent.vue')
const About = () => import('@/components/AboutComponent.vue')
const Blog = () => import('@/components/BlogComponent.vue')
const Profile = () => import('@/components/ProfileComponent.vue')
const Setting = () => import('@/components/SettingComponent.vue')
const Pinia = () => import('@/components/PiniaComponent.vue')
const Contact = () => import('@/components/ContactComponent.vue')
const Task = () => import('@/components/TaskComponent.vue')
const Validation = () => import('@/components/ValidationComponent.vue')
const Test = () => import('@/components/TestComponent.vue')
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