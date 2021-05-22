<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height " fluid>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="6">
            <v-card class="elevation-12 " justify="center">
              <v-window>
                <v-window-item>
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
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
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >
                          Create Account
                        </h1>

                        <h4 class="text-center mt-4">
                          برای ویرایش اطلاعات بر روی دکمه کلیک کنید (ویرایش)
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      first_name:  {{first_name}}
                      last_name:  {{last_name}}


                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark>ویرایش</v-btn>
                        <v-btn class="ma-2" outlined large fab color="indigo">
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
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


export default{
  computed:{
  ...mapGetters(['first_name','last_name','address','school',"major_id","grade_id"])
  },

}
</script>
