<template >
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 px-5" style="background-color:#141414">
        <h3 class="text-white">Bilim Kurgu</h3>
      </div>
    </div>
  </div>


  <swiper :slidesPerView="8" :spaceBetween="15" :slidesPerGroup="5" :loop="true" :loopFillGroupWithBlank="false"
    :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper   px-5  " style="background-color:#141414">
    <swiper-slide class="col-6 col-md-2 p-0 d-flex flex-column controlPanel" @click="gelen(data)"
      v-for="(data, index) in popularFilm" :key="index">

      <div class="main-content   col-md-12 p-0 d-flex flex-column">
        <img class="img-fluid " data-toggle="modal" data-target="#exampleModal"
          :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" alt="">
      </div>

    </swiper-slide>


  </swiper>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 px-5" style="background-color:#141414">
        <h3 class="text-white">Popüler Filmler</h3>
      </div>
    </div>
  </div>

  <swiper :slidesPerView="8" :spaceBetween="15" :slidesPerGroup="5" :loop="true" :loopFillGroupWithBlank="false"
    :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules"
    class="mySwiper px-5 py-3  d-flex justify-content-start align-items-center" style="background-color:#141414">

    main-content
    <swiper-slide class="col-6 col-md-2 p-0 d-flex flex-column controlPanel" @click="gelen(data)"
      v-for="(data, index) in allDaysFilm" :key="index">

      <div class="main-content   col-md-12 p-0 d-flex flex-column">
        <img data-toggle="modal" data-target="#exampleModal" class=" "
          :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" alt="">
      </div>

    </swiper-slide>

  </swiper>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 px-5" style="background-color:#141414">
        <h3 class="text-white">Tv Serileri</h3>
      </div>
    </div>
  </div>

  <swiper :slidesPerView="8" :spaceBetween="15" :slidesPerGroup="5" :loop="true" :loopFillGroupWithBlank="false"
    :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules"
    class="mySwiper px-5 py-3  d-flex justify-content-start align-items-center" style="background-color:#141414">

    main-content
    <swiper-slide class="col-6 col-md-2 p-0 d-flex flex-column controlPanel" @click="gelen(data)"
      v-for="(data, index) in tvSeries" :key="index">

      <div class="main-content   col-md-12 p-0 d-flex flex-column">
        <img data-toggle="modal" data-target="#exampleModal" class=" "
          :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" alt="">
      </div>

    </swiper-slide>

  </swiper>

  <mymodal />





</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters } from "vuex"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mymodal from "./modalsView.vue"
import "./style.css"

import { Pagination, Navigation } from "swiper";
import getFilmsData from "./Services/filmServices/services"
export default {
  data() {
    return {
      popularFilm: [],
      allDaysFilm: [],
      tvSeries: [],
      details: [],
    }
  },
  computed: {
    ...mapGetters(['getFilmDetails'])
  },
  methods: {
    gelen(e) {
      this.details = e
      
      this.$store.commit("setData", this.details)

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
  mounted() {
    getFilmsData.getPopularFilms().then(response => {
      this.popularFilm = (response.data.results)
    })

    getFilmsData.getAllDaysFilms().then(response => {
      this.allDaysFilm = (response.data.results)
    })

    getFilmsData.getTvSeries().then(response => {
      this.tvSeries = (response.data.results)
    })



  }
};
</script>


<style scoped src="./Css/style.css">
</style>
