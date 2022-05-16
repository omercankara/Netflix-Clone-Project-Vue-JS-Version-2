<template >
<div class="container-fluid">
        <div class="row">
                <div class="col-md-12 px-5" style="background-color:#141414">
                        <h3 class="text-white">Bilim Kurgu</h3>
                </div>
        </div>
</div>
  

  <swiper 
    :slidesPerView="8"
    :spaceBetween="15"
    :slidesPerGroup="5"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper   px-5  "
     style="background-color:#141414"
  >
        <swiper-slide class="col-6 col-md-2 p-0 d-flex flex-column controlPanel" @click="gelen(data)" v-for="(data,index) in veri" :key="index">
               
                <div class="main-content   col-md-12 p-0 d-flex flex-column">                              
                        <img class="img-fluid " data-toggle="modal" data-target="#exampleModal" :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" alt="">                           
                </div>
                
        </swiper-slide>
     
     
  </swiper>

   <swiper 
    :slidesPerView="8"
    :spaceBetween="15"
    :slidesPerGroup="5"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper px-5 py-3  d-flex justify-content-start align-items-center"
    style="background-color:#141414"
  >

  main-content
              <swiper-slide class="col-6 col-md-2 p-0 d-flex flex-column controlPanel" @click="gelen(data)" v-for="(data,index) in veri3" :key="index">
               
                <div class="main-content   col-md-12 p-0 d-flex flex-column">                              
                            <img data-toggle="modal" data-target="#exampleModal" class=" " :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" alt="">
                </div>
                
            </swiper-slide>
        
  </swiper>

    <swiper 
    :slidesPerView="8"
    :spaceBetween="15"
    :slidesPerGroup="5"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper px-5 py-3  d-flex justify-content-start align-items-center"
    style="background-color:#141414"
  >

  main-content
              <swiper-slide class="col-6 col-md-2 p-0 d-flex flex-column controlPanel" @click="gelen(data)" v-for="(data,index) in veri2" :key="index">
               
                <div class="main-content   col-md-12 p-0 d-flex flex-column">                              
                            <img data-toggle="modal" data-target="#exampleModal" class=" " :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" alt="">
                </div>
                
        </swiper-slide>
        
  </swiper>

<mymodal/>



 

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import {mapGetters} from "vuex"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  mymodal from "./modalsView.vue"
import "./style.css"

import { Pagination, Navigation } from "swiper";
export default {
data(){
        return{
                veri:[],
                veri2:[],
                veri3:[],
                details:[],
        }
},
computed:{
        ...mapGetters(['getFilmDetails'])
},
methods:{
        gelen(e){           
                this.details=e
                console.log(e)
                this.$store.commit("setData",this.details)
              
        }
},
  components: {
    Swiper,
    SwiperSlide,
    mymodal
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
      
    };
        
  },
    created(){
                const BASE_URL = 'https://api.themoviedb.org/3'
                const API_KEY = 'api_key=7a2105aac93303bf26e6ba1aae712e5b'
                const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY
                      this.$appAxios.get(API_URL).then(response=>{                
                           this.veri=(response.data.results)
                            console.log(this.veri)
                            console.log(response)                           
                        })

                        const baseurl2 = 'https://api.themoviedb.org/3'
                        const apikey2 = 'api_key=7a2105aac93303bf26e6ba1aae712e5b'
                        const apiurl2 = baseurl2 + '/trending/all/day?' +apikey2                
                         this.$appAxios.get(apiurl2).then(responsee=>{
                                 this.veri2=(responsee.data.results)
                                  console.log(this.veri2)                    
                        })

                        const baseurl3 = 'https://api.themoviedb.org/3'
                        const apikey3 = 'api_key=7a2105aac93303bf26e6ba1aae712e5b'
                        const apiurl3 = baseurl3 + `/tv/popular?${apikey3}&language=en-US&page=1`
                         this.$appAxios.get(apiurl3).then(responsee=>{                         
                           this.veri3=(responsee.data.results)
                            console.log(this.veri3)
                        })
        }
};
</script>


<style scoped src="./Css/style.css">
</style>
