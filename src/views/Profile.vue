<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height " fluid>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="10">
            <v-card class="elevation-12 " justify="center">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal blue-grey white--text">
                      <v-card-text class=" white--text mt-12">
                        <h1 class="text-center display-1">اطلاعات</h1>
                        <h5 class="text-center">
                          برای ویرایش اطلاعات بر روی دکمه کلیک کنید (ویرایش)
                        </h5>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn rounded outlined dark> ورود </v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <div class="d-flex flex-row mb-6">
                          <h1 color="blue darken-4" class=" ml-2">نام :</h1>
                          <h2
                            v-if="first_name !== ''"
                            class=" ml-12"
                          >
                            {{ first_name }}
                          </h2>
                          <h2 v-else  class=" ml-12">هنوز نام خود را وارد نکرده اید</h2>
                        </div>
                        <div class="d-flex flex-row mb-6 ml-12">
                          <h1  class="ml-2">نام خانوادگی:</h1>
                          <h2 color="blue" v-if="last_name !== ''">
                            {{ last_name }}
                          </h2>
                          <h2 v-else  class=" ml-12">هنوز نام خانوادگی وارد نکرده اید</h2>
                        </div>
                        <div class="d-flex flex-row mb-6">
                          <h1>آدرس:</h1>
                          <h2 color="blue" v-if="address == null">
                            {{ address }}
                          </h2>
                          <h2 v-else>هنوزآدرسی وارد نکرده اید</h2>
                        </div>
                      </v-card-text>
                      <div class="text-center mt-n5">
                     
                        <router-link tag="button" to="/edit" >
                         <v-btn color="success" large dark >
                              ویرایش
                        </v-btn>
                      
                        </router-link>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <h1>vdfvgfdbg</h1>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    ...mapGetters([
      "first_name",
      "last_name",
      "address",
      "school",
      "major_id",
      "grade_id",
      "genders",
    ]),
  },
  methods: {
    getData() {
      this.$store.dispatch("getMegarouteData");
    },
  },
};
</script>
