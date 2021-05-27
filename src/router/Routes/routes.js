import Home from "../../views/Home.vue"
import Profile from '../../views/Profile.vue'
import Edit from "../../views/Edit.vue"

export const Routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/edit',
        component:Edit
    },
   
    
]
