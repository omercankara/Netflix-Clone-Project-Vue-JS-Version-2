<template>
  <div class="container-fluid position-absolute main-logo" style="z-index:99">
    <div class="row">
      <div class="col-md-12 logo-section"> <img src="../img/logo.png" class="img-fluid logo" style="width:20%"></div>
    </div>
  </div>

  <div class="container-fluid mainPanel d-flex flex-column  bg-dark  justify-content-center align-items-center ">
    <div class="row      ">
      <div class="col-md-12  d-flex justify-content-center   loginPanel  ">
        <div class="row  px-3 py-5 mobile-panel  " style="z-index:999 !important;">
          <div class="col-md-12 px-5   mobile-panel ">

            <div class="col-md-12  ">
              <h1 class="text-white">Oturum Aç</h1>
            </div>

            <p id="visible" v-if="mainVisible" :class="{ 'alert alert-danger': deneme }" class="alert alert-success">
              {{ mainAlert }}</p>
            <div class="col-md-12   mt-3  py-4 ">
              <input v-model="userData.mail" type="text" class="form-control loginInput"
                placeholder="E Posta Adresiniz">
              <input v-model="userData.password" type="text" class="form-control mt-3 loginInput" placeholder="Parola">
            </div>

            <div class="col-md-12 d-flex py-4 ">
              <button @click="onSubmit" class="btn btn-danger w-100 py-3">Oturum Aç</button>
            </div>

            <div class="col-md-12 d-flex    mt-1 p-0   ">
              <div class="col-md-2  d-flex justify-content-center align-items-center"> <input type="checkbox" name=""
                  id=""></div>
              <div class="col-md-10 ">
                <p class="mt-3 text-white">Beni Hatırla</p>
              </div>
            </div>

            <div class="col-md-12 d-flex justify-content-around  align-items-center      ">
              <h6 class="text-white">Netflix'e katılmak ister misiniz? <span class="text-danger"
                  @click="this.$router.push({ name: 'accountForm' })">Şimdi kaydolun.</span></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerPage />
</template>
<script>
import cryptoJs from "crypto-js"
import footerPage from "./footerPage.vue"

export default {
  components: {
    footerPage
  },
  data() {
    return {
      userData: {
        mail: null,
        password: null
      },
      veri: [],
      mainAlert: null,
      mainVisible: false,
      deneme: false,
      test: 'alert alert-danger'
    }
  },
  methods: {
    onSubmit() {
      const password = cryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString()
      console.log(password)
      this.$appAxios.get(`/users?password=${password}&mail=${this.userData.mail}`).then(loginResponse => {     //JSON TYPİCODE ÖZELLİGİ İLE İSTENİLEN BİLGİYİ GETİR     
        console.log(loginResponse)
        if (loginResponse?.data?.length > 0) { //data içinde bilgl varsa storu güncelle
          this.$store.commit("setUser", loginResponse?.data[0])
          this.mainAlert = "Giriş Başarılı İyi Keyifler Dileriz."
          this.mainVisible = true
          this.deneme = false
          setTimeout(() => {
            this.$router.push({ name: 'giris' })
          }, 1500)
        } else {
          this.mainAlert = "Kullanıcı Adı Veya Parola Hatalı Gözüküyor"
          this.mainVisible = true
          this.deneme = true
        }
      })
    }
  }
}
</script>
<style scoped src="./loginPage.css">
</style>
