<template>
   <v-app id="inspire"> 
    <v-content >
      <v-container class="fill-height " fluid >
        <v-row  justify="center" >
          <v-col cols="12" sm="6" md="6" >
            <v-card class="elevation-12 "  justify="center">
              <v-window >
                <v-window-item >
                  <v-row  justify="center">
                    <v-col cols="12" md="8" >
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >وارد شوید</h1>
                          <v-form>
                          <v-text-field
                            label="شماره همراه"
                            name="phonNumber"
                            prepend-icon="email"
                            type="number"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="کد ملی"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                     </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark>ورود</v-btn>
                      </div>
                    </v-col>
                  
                  </v-row>
                </v-window-item>
              
              </v-window>
            </v-card>
          </v-col>
        </v-row >
      </v-container>
    </v-content>
  </v-app  >

</template>

<script>
export default {

};
</script>
<style scoped>
.found{
  border:2px solid red;
}
</style>