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
    user_id: 0

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
    }

};
export default {
    state,
    getters,
    mutations,
    actions
}