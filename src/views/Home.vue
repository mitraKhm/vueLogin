<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height " fluid>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="6">
            <v-card class="elevation-12 " justify="center">
              <v-card-title
                class="headline font-weight-regular blue-grey white--text"
              >
                وارد شوید
              </v-card-title>
              <v-window>
                <v-window-item>
                  <v-row justify="center">
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <v-form>
                          <v-text-field
                            outlined
                            prepend-icon="mdi-phone"
                            label="شماره همراه"
                            name="phonNumber"
                            type="number"
                            color="blue-grey "
                            v-model="phone"
                            @input="$v.phone.$touch()"
                          />
                          <v-alert
                            dense
                            outlined
                            type="error"
                            v-if="!$v.phone.required && $v.phone.$dirty"
                            >لطفا وارد کنید
                          </v-alert>
                          <!-- <v-alert 
                          dense
                           outlined 
                           type="error"
                           v-if="!$v.phone.phone"
                            >شماره وارد شده صحی نمی باشد
                          </v-alert> -->

                          <v-text-field
                            prepend-icon="mdi-lock"
                            outlined
                            id="password"
                            label="کد ملی"
                            name="password"
                            type="password"
                            color="blue-grey "
                            v-model="password"
                            @input="$v.password.$touch()"
                            dense
                          />
                          <v-alert
                            dense
                            outlined
                            type="error"
                            v-if="!$v.password.isValid && $v.password.$dirty"
                            >کد ملی وارد شده صحیح نمیباشد
                          </v-alert>
                          <v-alert
                            dense
                            outlined
                            type="error"
                            v-if="!$v.password.required && $v.password.$dirty"
                            >لطفا کلمه عبور را وارد نمایید
                          </v-alert>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          class="ma-2"
                          @click.prevent="sendData()"
                          rounded
                          color="success"
                          >ورود</v-btn
                        >
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
import {
  required,
  maxLength,
  minLength,
  numeric,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      phone: "09388131193",
      password: "4900443050",
    };
  },
  computed: {
    data() {
      return this.$store.state.Data;
    },
  },

  methods: {
    sendData() {
      const register = {
        mobile: this.phone,
        password: this.password,
      };
      this.$store.dispatch("sendData", register);
    },
  },
  validations: {
    phone: {
      required,
      numeric,
      maxLength: maxLength(11),
      minLength: minLength(11),

      isValid: (val) => {
        return true;
      },
    },
    password: {
      required,
      numeric,
      isValid: (value) => {
        if (value === "") return true;
        if (value.length == 10) {
          if (
            value == "1111111111" ||
            value == "0000000000" ||
            value == "2222222222" ||
            value == "3333333333" ||
            value == "4444444444" ||
            value == "5555555555" ||
            value == "6666666666" ||
            value == "7777777777" ||
            value == "8888888888" ||
            value == "9999999999"
          ) {
            return false;
          }
          var c = parseInt(value.charAt(9));
          var n =
            parseInt(value.charAt(0)) * 10 +
            parseInt(value.charAt(1)) * 9 +
            parseInt(value.charAt(2)) * 8 +
            parseInt(value.charAt(3)) * 7 +
            parseInt(value.charAt(4)) * 6 +
            parseInt(value.charAt(5)) * 5 +
            parseInt(value.charAt(6)) * 4 +
            parseInt(value.charAt(7)) * 3 +
            parseInt(value.charAt(8)) * 2;
          var r = n - parseInt(n / 11) * 11;
          if (
            (r == 0 && r == c) ||
            (r == 1 && c == 1) ||
            (r > 1 && c == 11 - r)
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
    },
  },
};
</script>
<style scoped>
.found {
  border: 2px solid red;
}
</style>
// :disabled="$v.$invalid"
