<template>
  <headerPage />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12  py-5 ">

        <div class="row">
          <div class="col-md-12  d-flex flex-column  justify-content-center align-items-center   ">
            <div class="col-md-5 px-5    d-flex flex-column  justify-content-start align-items-start">
              <h2>Üyeliğinizi başlatmak için bir parola oluşturun</h2>
              <p>Sadece birkaç adım daha kaldı, sonra bitiyor! <br> Biz de formaliteyi hiç sevmiyoruz</p>
            </div>
          </div>



          <div class="col-md-12   mt-3   d-flex  justify-content-center align-items-center  ">
            <div class="col-md-4 p-0 w-25  d-flex flex-column justify-content-center align-items-center">

              <input v-model="userData.mail" type="text" class="form-control" placeholder="E posta Adresi Giriniz"
                style="height:6vh;">

              <p class="text-danger alert alert-success" v-if="accesMain">{{ accesAlert }}</p>
              <input v-model="userData.password" type="password" class="form-control mt-3"
                placeholder="Parola Belirleyiniz" style="height:6vh;">
              <button type="submit" class="btn btn-danger w-100 px-5 py-2 mt-3" @click="next">İLERİ</button>

            </div>
          </div>

          <div class="col-md-12 py-5  d-flex flex-column justify-content-center align-items-center">
            <div class="col-md-4 d-flex px-5 py-3 justify-content-center align-items-center">

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <footerPage />
</template>


<script>
import { mapGetters } from "vuex"
import headerPage from "./headerComp.vue"
import footerPage from "./footerPage.vue"
import cryptoJs from "crypto-js"
export default {
  computed: {
    ...mapGetters(['getUserContact'])
  },
  components: {
    headerPage,
    footerPage
  },
  data() {
    return {
      userData: {
        mail: "",
        password: ""
      },
      accesAlert: null,
      accesMain: false,
    }
  },
  created() {
    console.log(this.getUserContact)

  },
  methods: {
    next() {
      if (this.userData.mail == "" || this.userData.password == "") {
        this.accesAlert = "Lütfen Kontrolleri Sağlayın"
        this.accesMain = true
        setTimeout(() => {
          this.accesMain = false
        }, 1500)
      } else {
        // this.$router.push({name:'planform'})

        const password = cryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString()

        this.$appAxios.post("users", { ...this.userData, password }).then(registered => {
          console.log(registered)
        })
        // const decryptedPassword = cryptoJs.AES.decrypt(password,this.$store.getters._saltKey).toString(cryptoJs.enc.Utf8) //parolayı göster
        //  console.log(decryptedPassword)
        this.accesMain = true
        this.accesAlert = "Kayıt İşlemi Başarı ile tamamlandı. YÖNLENDİRİLİYORUSUNUZ..."
        setTimeout(() => {
          this.$router.push({ name: 'planform' })
        }, 2500)

      }
    }
  },

  watch: {
    mail(value) {

      if (value.length == 0) {
        this.accesMain = true
        this.accesAlert = "Lütfen E Posta Adresinizi Giriniz"
        console.log(this.mail)

      }
      else if (value.length < 50) {
        this.accesAlert = "E‑posta 5 ila 50 karakter olmalıdır"
      } else {
        this.accesAlert = ""
      }
      console.log(value)
    }
  }
}
</script>

<style scoped>
.img-fluid {}
</style>