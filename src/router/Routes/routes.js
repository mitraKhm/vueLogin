import Home from "../../views/Home.vue"
import Profile from '../../views/Profile.vue'
import About from "../../views/About.vue"

export const Routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    
]
