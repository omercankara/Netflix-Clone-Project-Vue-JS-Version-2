<template>
   <successHeader />
   <div class="container-fluid">
      <div class="row">
         <div class="col-md-12 d-flex ">
            <div class="col-md-6">
               <h1>Listem</h1>
            </div>
            <div v-if="display" class="col-md-6  d-flex justify-content-end align-items-center py-2">
               <h5 class="list-panel  alert alert-success">{{ alert }}</h5>
            </div>
         </div>
      </div>

      <div class="row" v-if="list">
         <div class="col-md-12 alert alert-warning">Henüz Listeniz Boş !</div>
      </div>

      <div class="row  ">
         <div class=" position-relative   col-md-2 d-flex flex-column  justify-content-end align-items-center mt-2"
            v-for="(film, index) in listItem " :key="index">
            <img class="img-fluid page" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
            <div class="col-md-10 p-0 d-flex justify-content-around   controlPanel">
               <button class=" p-0  " @click="del()" style="border:none; outline:none; background-color:#141414;"><i
                     class="fa-solid fa-play fa-2x  text-white"></i></button>
               <button class=" p-0 ml-3" @click="del(film)"
                  style="border:none; outline:none; background-color:#141414;"><i
                     class=" fa fa-trash  fa-2x text-white"></i></button>
            </div>
         </div>
      </div>
   </div>

</template>
<script>

import successHeader from "../views/successHeader.vue"
import deleteListItem from "./Services/list"
import { mapGetters } from "vuex"
export default {

   components: {
      successHeader
   },

   data() {
      return {
         listItem: [],
         alert: null,
         display: false,
         list: false
      }
   },

   computed: {
      ...mapGetters(['getFavoriFilm']),
   },

   watch:
   {
      listItem(value) {
         if (value.length > 0) {
            this.list = false
         }
         else {
            this.list = true
         }
      }
   },

   methods: {
      del(e) {
         deleteListItem.deleteListItem(e.id)  //Delete Api
         this.listItem = this.listItem.filter(t => t != e)
         this.display = true
         this.alert = "Listeden Başarıyla Kaldırıldı"
         setTimeout(() => {
            this.display = false
         }, 1500)
      }

   },

   mounted() {
      deleteListItem.getFavoriFilmListItem().then(response => {
         this.listItem = response.data
      })
      this.list = true
   },


}
</script>

<style scoped src="./Css/list.css">
</style>