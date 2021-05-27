<template>
  <div>
    <div class="box">
      <h3>استان</h3>
      <v-select
        v-model="provincesId"
        :items="provinces"
        item-text="title"
        persistent-hint
        return-object
        single-line
        prepend-icon='mdi-city'
        item-value="id"
        label="لطفا استان محل زندگی خود را انتخاب کنید"
      ></v-select>
    </div>
    <div class="box">
      <h3> شهر </h3>
      <v-select
        v-model="selected_citie"
        :items="testCiti"
        item-text="title"
        persistent-hint
        return-object
        single-line
           prepend-icon='mdi-city'
        label="لطفا شهر خود راانتخاب کنید"
      ></v-select>

      <v-text-field 
      label="لطفا آدرس خود را وارد کنید"
     prepend-icon=' mdi-home'
      ></v-text-field>
    </div>
    <div class="box">
      <v-text-field prepend-icon=' mdi-email' label="کد پستی"></v-text-field>
    </div>
    <div class="box"></div>

    <div class="box">
      <h3>جنسیت</h3>
      <v-select
        v-model="selected_genders"
 prepend-icon='mdi-account'
        item-text="title"
        persistent-hint
        return-object
        single-line
        label="Select a genders"
      ></v-select>
    </div>
    <div class="box">
      <h3> رشته تحصیلی</h3>
      <v-select
        v-model="selected_majors"
        :items="majors"
        item-text="title"
        persistent-hint
        return-object
        prepend-icon=' mdi-school'
        single-line
        label="لطفا رشته تحصیلی خود را انتخاب کنید"
      ></v-select>

      <v-select
        v-model="selected_grades"
        :items="grades"
        item-text="title"
        persistent-hint
        return-object
         prepend-icon='mdi-account'
        single-line
        label="مقطع تحصیلی"
      ></v-select>

      <v-text-field label="مدرسه"></v-text-field>
    </div>
    <div class="box">
      <h3>ایمیل</h3>
      <v-text-field
       v-model="email"
       label="ایمیل"
       prepend-icon=' mdi-email'
       ></v-text-field>
    </div>
  </div>
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
  methods: {},
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
  width: 75%;
  border: 1px solid rgb(168, 168, 168);
  margin: 30px;
  border-radius: 5px;
  padding: 10px;
}
.select {
  width: 50%;
}
</style>
