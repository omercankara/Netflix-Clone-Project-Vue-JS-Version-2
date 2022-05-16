<template>

        <div class="container-fluid">

                <div class="row">
                   
                        <div class="col-md-12 d-flex justify-content-between " style="background-color:black; height:14vh;">
                                <div class="col-md-6 d-flex justify-content-between  ">                            
                                       <div class="col-md-3   d-flex justify-content-center align-items-center"> 
                                                 <img src="../img/logo.png" class="img-fluid">
                                       </div>
                                       <div class="col-md-10  d-flex">
                                                <ul id="menuler">                                           
                                                        <li  @click="this.$router.push({name:'giris'})"  style="font-family:poppins"> <a href="">Anasayfa</a></li>
                                                        <li  @click="this.$router.push({name:'giris'})" class="text-white">Diziler</li>
                                                        <li  @click="this.$router.push({name:'giris'})"  class="text-white">Filmler</li>
                                                        <li  @click="this.$router.push({name:'giris'})" class="text-white">Yeni Ve Popüler</li>
                                                        <li class="text-white" @click="list">Listem</li>
                                                </ul>
                                       </div>
                                       

                                </div>
                                <div class="col-md-6 p-0  control-panel  d-flex align-items-center justify-content-center">

                                                <div class="col-md-11  p-0  d-flex justify-content-end mt-4">

                                                        <ul id="controlMenu" class="position-relative" >                              
                                                                        <li style="cursor:pointer;" @click="accountPanel" class="text-white">Hesap Yönetimi</li>     
                                                                        <div class="card  bg-dark position-absolute col-md-11" v-if="account" >
                                                                                <div class="card-header p-0 d-flex justify-content-center align-items-center" v-if="_getCurrentUser">
                                                                                        <p class="text-white text-center">Hoş Geldin {{_getCurrentUser.mail}}</p>
                                                                                </div>
                                                                                <div class="card-body  p-0 d-flex justify-content-center align-items-center">
                                                                                <ul class="py-1  p-0">
                                                                                        <li class="text-white"  >Profil yönetimi</li>
                                                                                         <li class="py-3 text-white " >Hesap </li>
                                                                                        <li @click="out" class="text-white" >Oturum Kapat </li>
                                                                                </ul>                          
                                                                </div>                                                              
                                                         </div>                                                  
                                                </ul>                                              
                                         </div>                                      
                                </div>                    
                        </div>                   
                </div>
        </div>

        
</template>

<script>
import {mapGetters} from "vuex"
export default {
computed:{
        ...mapGetters(['_getCurrentUser'])
},
        data(){
                return{
                     
                        account:false
                }
        },
        methods:{
                accountPanel(){
                        this.account=!this.account
                },
                out(){
                        this.$store.commit("logOut")
                        this.$router.push({name:"home"})
                },
                list(){
                        this.$router.push({name:"list"})
                }
        }      
      
}
</script>


<style scoped src="./Css/succesMain.css">
</style>
