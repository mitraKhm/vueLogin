<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height " fluid>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="8">
            <v-card
              color="blue-grey lighten-5"
              class="elevation-12 "
              justify="center"
            >
              <v-card-title
                class="headline font-weight-regular blue-grey white--text"
              >
                ویرایش اطلاعات
              </v-card-title>
              <div class="box">
                <h3>نام</h3>
                <v-text-field
                  class="mt-3"
                  label="نام"
                  v-model="first_name"
                ></v-text-field>
                <h3>نام خانوادگی</h3>
                <v-text-field
                  class="mt-3"
                  label="نام خانوادگی"
                  v-model="last_name"
                ></v-text-field>
                <h3>استان</h3>
                <v-select
                  class="mt-3"
                  v-model="provincesId"
                  :items="provinces"
                  item-text="title"
                  persistent-hint
                  return-object
                  solo
                  single-line
                  prepend-icon="mdi-city"
                  item-value="id"
                  label="لطفا استان محل زندگی خود را انتخاب کنید"
                ></v-select>

                <h3>شهر</h3>
                <v-select
                  class="mt-3"
                  v-model="selected_citie"
                  :items="testCiti"
                  item-text="title"
                  item-value=""
                  persistent-hint
                  solo
                  eager
                  return-object
                  single-line
                  prepend-icon="mdi-city"
                  label="لطفا شهر خود راانتخاب کنید"
                ></v-select>
                <h3>آدرس</h3>
                <v-text-field
                  class="mt-3"
                  label="لطفا آدرس خود را وارد کنید"
                  prepend-icon=" mdi-home"
                  v-model="address"
                ></v-text-field>

                <h3>کد پستی</h3>
                <v-text-field
                  class="mt-3"
                  prepend-icon=" mdi-email"
                  label="کد پستی"
                ></v-text-field>

                <h3>جنسیت</h3>
                <v-select
                  class="mt-3"
                  v-model="selected_genders"
                  item-value="id"
                  prepend-icon="mdi-account"
                  :items="genders"
                  solo
                  item-text="title"
                  persistent-hint
                  return-object
                  single-line
                  label="لطفا انتخاب کنید"
                ></v-select>

                <h3>رشته تحصیلی</h3>
                <v-select
                  class="mt-3"
                  v-model="selected_majors"
                  :items="majors"
                  item-text="title"
                  persistent-hint
                  solo
                  return-object
                  prepend-icon=" mdi-school"
                  single-line
                  label="لطفا رشته تحصیلی خود را انتخاب کنید"
                ></v-select>

                <v-select
                  class="mt-3"
                  v-model="selected_grades"
                  :items="grades"
                  item-text="title"
                  persistent-hint
                  solo
                  return-object
                  prepend-icon="mdi-account"
                  single-line
                  label="مقطع تحصیلی"
                ></v-select>
                <h3>مدرسه</h3>
                <v-text-field
                  class="mt-3"
                  label="مدرسه"
                  v-model="school"
                ></v-text-field>

                <h3>ایمیل</h3>
                <v-text-field
                  class="mt-3"
                  v-model="email"
                  label="ایمیل"
                  prepend-icon=" mdi-email"
                ></v-text-field>
                <h3>چند جمله درباره خود بنویسید</h3>

                <v-textarea
                  solo
                  name="input-7-4"
                  label="درباره من"
                ></v-textarea>
                <v-btn color="success" large dark @click="sendData">
                  ارسال اطلاعات</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selected: "",
      selected_provinces: "",
      selected_grades: "",
      selected_majors: "",
      selected_citie: "",
      selected_genders: "",
      email: "",
      first_name: "",
      last_name: "",
      address: "",
      school: "",

      citie: [],
      provincesId: { id: 1 },
      testCiti: [],
    };
  },
  computed: {
    ...mapGetters(["genders", "grades", "majors", "provinces"]),
    cities() {
      return (this.citie = this.$store.getters.cities);
    },
    filterCities() {
      this.testCiti = this.citie.filter(
        (i) => i.province.id == this.provincesId.id
      );
    },
  },
  methods: {
    sendData() {
      const body = {
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        school: this.school,
        major_id: this.selected_majors.id,
        grade_id: this.selected_grades.id,
        gender_id: this.selected_genders.id,
        shahr_id: this.selected_citie.id,
      };
      console.log(body);
      this.$store.dispatch("sendEditData", body);
    },
  },
  beforeMount() {
    this.$store.dispatch("getMegarouteData");
  },
};
</script>
<style scoped>
.found {
  border: 2px solid red;
  padding: 10px;
  margin: 20px;
  width: 100px;
  border-radius: 5px;
}
.box {
  width: 85%;
  margin: 30px;
  padding: 30px;
}
.select {
  width: 50%;
}
</style>
