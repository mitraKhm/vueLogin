import Vue from 'vue';
const state = {
    // PhonNumber: 0,
    // NationalCode: 0
};

const getters = {


};
const mutations = {

};
const actions = {

    sendData(context, data) {
        Vue.http.post('/api/v2/login', data).then(
            (response) => {
                if (response.status == 200) {
                    console.log(response);
                    alert("ثبت نام با موفقیت انجام شد");
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