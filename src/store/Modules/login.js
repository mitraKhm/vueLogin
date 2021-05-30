import Vue from 'vue';
import {
    router
} from '../../main.js'
const state = {
    first_name: '',
    last_name: "",
    address: "",
    school: "",
    major_id: 0,
    grade_id: 0,
    gender_id: 0,
    user_id:0,
    cities: {},
    genders: [],
    grades:[],
    majors: [],
    provinces: []


}

const getters = {
    user_id(state) {
        return state.user_id
    },
    first_name(state) {
        return state.first_name
    },
    last_name(state) {
        return state.last_name
    },
    address(state) {
        return state.address
    },
    school(state) {
        return state.school
    },
    major_id(state) {
        return state.major_id
    },
    grade_id(state) {
        return state.grade_id
    },
    //--------------------------get data---------------------------- 
    cities(state) {
        return state.cities
    },
    genders(state) {
        return state.genders
    },
    grades(state) {
        return state.grades
    },
    majors(state) {
        return state.majors
    },
    provinces(state) {
        return state.provinces
    },

};
const mutations = {

    SetAthCookie(state, loginRes) {
        Vue.cookie.set(
            'AthToken',
            loginRes.access_token,
            loginRes.token_expires_at
        )
    },
    user_id(state, res) {
        state.user_id = res
    },
    first_name(state, res) {
        state.first_name = res
    },
    last_name(state, res) {
        state.last_name = res
    },
    address(state, res) {
        state.address = res
    },
    school(state, res) {
        state.school = res
    },
    major_id(state, res) {
        state.major_id = res
    },
    grade_id(state, res) {
        state.grade_id = res
    },
    //--------------------------get data---------------------------- 
    cities(state, res) {
        state.cities = res
    },
    genders(state, res) {
        state.genders = res
    },
    grades(state, res) {
        state.grades = res
    },
    majors(state, res) {
        state.majors = res
    },
    provinces(state, res) {
        state.provinces = res
    },
};
const actions = {

    sendData(context, data) {
        console.log(data)
        Vue.http.post('/api/v2/login', data).then(
            (response) => {
                if (response.status == 200) {
                    console.log(response)
                    context.commit("SetAthCookie", response.body.data)
                    context.commit("first_name", response.body.data.user.first_name)
                    context.commit("last_name", response.body.data.user.last_name)
                    context.commit("address", response.body.data.user.address)
                    context.commit("school", response.body.data.user.school)
                    context.commit("major_id", response.body.data.user.major_id)
                    context.commit("grade_id", response.body.data.user.grade_id)
                    context.commit("user_id", response.body.data.user.id)
                    router.push('/profile')
                }



            }
        )
    },
    getMegarouteData(context) {

        Vue.http.get('/api/v2/megaroute/getUserFormData').then(
            (response) => {
                if (response.status == 200) {
                    console.log(response)
                    context.commit("cities", response.body.data.cities)
                    context.commit("genders", response.body.data.genders)
                    context.commit("majors", response.body.data.majors)
                    context.commit("grades", response.body.data.grades)
                    context.commit("provinces", response.body.data.provinces)
                }
            }
        )
    },
    sendEditData(context, data){
        console.log('userId:', state.user_id)
        Vue.http.put('/api/v2/user/'+ state.user_id , data).then(
            
            (response => {
                console.log(response)
            })
        )

    }
};
export default {
    state,
    getters,
    mutations,
    actions
}