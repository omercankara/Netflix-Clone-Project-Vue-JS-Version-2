<template>
                <headerPage/>
                <div class="container-fluid  px-5">
                        <div class="row   py-5 px-5">


                                <div class="col-md-12    py-3">
                                        <div class="col-md-6      ">
                                                <h2 class=" ml-4">Kendinize uygun bir plan seçin</h2>
                                        </div>
                                        <div class="col-md-12 mt-4      ">
                                                        <div class="col-md-6 d-flex justify-content-start align-items-center ">
                                                              <img src="../img/true.png" class="img-fluid " style="width:8%" >
                                                              <p class="ml-3">Canınız neyi isterse izleyin. Reklamsız.</p>
                                                        </div>            
                                        </div>

                                                   <div class="col-md-12      ">
                                                        <div class="col-md-6 d-flex justify-content-start align-items-center ">
                                                              <img src="../img/true.png" class="img-fluid " style="width:8%" >
                                                              <p class="ml-3">Sadece sizin için önerilen içerikler.</p>
                                                        </div>            
                                        </div>

                                          <div class="col-md-12      ">
                                                        <div class="col-md-6 d-flex justify-content-start align-items-center ">
                                                              <img src="../img/true.png" class="img-fluid " style="width:8%" >
                                                              <p class="ml-3">Planınızı istediğiniz zaman değiştirebilir ya da iptal edebilirsiniz.</p>
                                                        </div>            
                                        </div>
                                </div>

                                <div class="col-md-12 d-flex  justify-content-end align-items-stretch" >
                                                <div class="col-md-7  d-flex justify-content-around  "  v-for="(name, index) in packetName" :key="index">
                                                        <div  @click="basic"  :class="{'standartBind':basicBind}"  class="col-md-3 basic  d-flex justify-content-center align-items-center" style="height:120px; width:100px; font-family:poppins; color:white; ">{{name.temel}}</div>
                                                        <div  @click="standart" :class="{'standartBind':standartBind}" class="col-md-3 standart  d-flex justify-content-center align-items-center" style="height:120px; width:100px; font-family:poppins; color:white; ">{{name.standart}}</div>
                                                         <div   @click="custom"  :class="{'standartBind':customBind}"  class="col-md-3  custom d-flex justify-content-center align-items-center" style="height:120px; width:100px; font-family:poppins; color:white; ">{{name.ozel}}</div>
                                                </div>
                                </div>

                                <div class="col-md-12 d-flex justify-content-between mt-3    border-bottom  " >
                                        <div class="col-md-2 ">Aylık Ücret</div>
                                      <div   class="col-md-7  d-flex justify-content-around" v-for="(fiyat, index) in packetPrice" :key="index"> 
                                                        <div  :class="{'textBİnd':basicBind}" class="col-md-3  d-flex justify-content-center align-items-center"      style="font-family:poppins; color:gray;">{{fiyat.temel}}</div>
                                                        <div  :class="{'textBİnd':standartBind}" class="col-md-3  d-flex justify-content-center align-items-center" style="font-family:poppins; color:gray;" >{{fiyat.standart}}</div>
                                                         <div  :class="{'textBİnd':customBind}" class="col-md-3  d-flex justify-content-center align-items-center" style="font-family:poppins; color:gray;">{{fiyat.ozel}}</div>
                                        </div>
                                </div>




                                      <div class="col-md-12   d-flex justify-content-between mt-3   border-bottom    ">
                                        <div class="col-md-2">Video kalitesi</div>
                                      <div class="col-md-7  d-flex justify-content-around  " v-for="(quality, index) in packetClass" :key="index">
                                                        <div  :class="{'textBİnd':basicBind}" class="col-md-3  d-flex justify-content-center align-items-center"  style="font-family:poppins; color:gray;"  >{{quality.temel}}</div>
                                                        <div   :class="{'textBİnd':standartBind}" class="col-md-3  d-flex justify-content-center align-items-center"  style="font-family:poppins; color:gray;" >{{quality.standart}}</div>
                                                         <div   :class="{'textBİnd':customBind}" class="col-md-3  d-flex justify-content-center align-items-center"  style="font-family:poppins; color:gray;" >{{quality.ozel}}</div>
                                                </div>

                                </div>

                                      <div class="col-md-12 d-flex justify-content-between mt-3   border-bottom     ">
                                        <div class="col-md-2">Çözünürlük</div>
                                      <div class="col-md-7  d-flex justify-content-around  "  v-for="(quality, index) in packetResolution" :key="index" >
                                                        <div  :class="{'textBİnd':basicBind}" class="col-md-3  d-flex justify-content-center align-items-center"  style="font-family:poppins; color:gray;" >{{quality.temel}}</div>
                                                        <div  :class="{'textBİnd':standartBind}" class="col-md-3  d-flex justify-content-center align-items-center"  style="font-family:poppins; color:gray;" >{{quality.standart}}</div>
                                                         <div  :class="{'textBİnd':customBind}" class="col-md-3  d-flex justify-content-center align-items-center"  style="font-family:poppins; color:gray;" >{{quality.temel}}</div>
                                                </div>

                                </div>

                                      <div class="col-md-12 d-flex justify-content-between mt-3     border-bottom   ">
                                        <div class="col-md-3">Televizyon, bilgisayar, cep telefonu ve tabletinizde seyredin</div>
                                      <div class="col-md-7  d-flex justify-content-around  ">
                                                        <div class="col-md-3  d-flex justify-content-center align-items-center" ><img src="../img/true.png" class="img-fluid  w-25"  ></div>
                                                        <div class="col-md-3  d-flex justify-content-center align-items-center" > <img src="../img/true.png" class="img-fluid  w-25"  ></div>
                                                         <div class="col-md-3  d-flex justify-content-center align-items-center" > <img src="../img/true.png" class="img-fluid  w-25"  ></div>
                                                </div>

                                </div>
                                       <div class="col-md-12  py-5 ">
                                                  <p>HD (720p), Full HD (1080p), Ultra HD (4K) ve HDR kullanılabilirliği internet hizmetinize ve cihazınızın özelliklerine bağlıdır. Tüm içerikler bütün çözünürlüklerde mevcut olmayabilir. Ayrıntılar için Kullanım Koşulları sözleşmemize bakın.</p>
                                       <p>Bu hesabı sadece sizinle birlikte yaşayanlar kullanabilir. Özel planda aynı anda 4 farklı cihazda içerik izleyin. Standart planda bu sayı 2, Temel planda ise 1'dir.</p>  
                                       </div>
                                <div class="col-md-12 d-flex justify-content-center align-items-center">
                                                 <div class="col-md-6 d-flex justif-content-center align-items-center px-5 py-2">
                                                <button class="btn btn-danger w-100 py-3" @click="next">İleri</button>
                                       </div>
                                </div>
                                       


                        

                        </div>
                </div>

        
</template>     

<script>
import headerPage from "./headerComp.vue"
export default {
        components:{
                headerPage
        },

        data(){
                return{
                     packetName:[
                         {temel:"Temel", standart:"Standart", ozel:"Özel"},
                     ],
                     packetPrice:
                     [
                                 {temel:37.99, standart:57.99, ozel:77.99},
                     ],
                      packetClass:
                     [
                                 {temel:"iyi", standart:"Daha iyi", ozel:" En iyi"},
                     ],
                     packetResolution:[
                         {temel:"480 P", standart:"1080 P", ozel:"4K + HDR"},
                     ],
                    basicBind:true,
                    standartBind:false,
                    customBind:false
                }
        },

      
        methods:{
                basic(){
                        this.basicBind=true
                       
                },
                standart(){
                          this.standartBind=true
                       
                },
                custom(){
                        this.customBind=true
                },
                next(){
                        this.$router.push({name:'loginPage'})
                }
        },
                watch:{
                        basicBind(value){
                                if(value==true){
                                        this.standartBind=false
                                        this.customBind=false
                                        
                                }
                                
                        },
                        standartBind(value){
                                if(value==true){
                                        this.basicBind=false
                                        this.customBind=false
                                }
                        },
                        customBind(value){
                                    if(value==true){
                                        this.basicBind=false
                                        this.standartBind=false
                                }  
                        }
                }
        
}
</script>

<style scoped>
        .standart, .basic, .custom{
                width: 100px !important;
                height: 120px !important;
                background-color: rgba(252, 2, 2, 0.582);
        }
        .standartBind{
                background-color: red;
                
        }
        .textBİnd{
                color:Red !important;
                font-family: "poppins"
        }

    
</style>