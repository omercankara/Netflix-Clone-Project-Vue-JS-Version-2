<template>
<headerPage/>
        <div class="container-fluid">
                 <div class="row">
                        <div class="col-md-12  ">

                             <div class="row py-5   ">
                        
                                     <div class="col-md-12  d-flex flex-column  justify-content-center align-items-center py-5 ">
                                                <img src="../img/devices.png" class="img-fluid" style="width:20%">
                                        </div>

                                        <div class="col-md-12 px-5 py-3   d-flex  justify-content-center align-items-center  ">
                                                <h2 class="text-center">Hesabınızı Oluşturalım</h2>                                                                                                       
                                        </div>

                                           <div class="col-md-12  d-flex flex-column justify-content-center align-items-center">
                                                        <div class="col-md-4 px-5 py-5">
                                                               <p class="text-center" style="font-family:poppins">Netflix sizin için kişiselleştirilir. İstediğiniz zaman, istediğiniz cihazda izlemek için bir parola oluşturun.</p>
                                                        </div>
                                        </div>   

                                          <div class="col-md-12  d-flex flex-column justify-content-center align-items-center">
                                                        <div class="col-md-4 d-flex px-5 py-3 justify-content-center align-items-center">
                                                              <button class="btn btn-danger w-100 px-5 py-4" @click="next">İLERİ</button>
                                                        </div>
                                        </div>   
                                
                                  </div>             
                        </div>
                </div>
        </div>
        <footerPage/>
</template>

<script>
import headerPage from "./headerComp.vue"
import footerPage from "./footerPage.vue"
export default {
        components:{
                headerPage,
                footerPage
        },  
        methods:{
                next(){
                         this.$router.push({name:'accountForm'})
                }
        },
     
}
</script>



<style scoped>
.img-fluid{
}
</style>