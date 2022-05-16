<template>
      

<!-- Modal -->
<div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content"  >
    
                <div class="col-md-12 p-0 d-flex justify-content-center align-items-center"  >
                                <img style="height:600px !important;" class=" img-fluid p-0 h-75 w-100" :src="`https://image.tmdb.org/t/p/w500/${getFilmDetails.poster_path}`" alt="">             
                </div>

                <div class="col-12 col-md-12 p-0" style="background-color:#141414;">
                        <div class="col-md-5 d-flex justify-content-start align-items-center  py-3   ">
                                <button class="btn btn-light h-50 w-50 ">Play </button>
                                 <button @click="addFilm(getFilmDetails)" class="btn btn-primary ml-4">Add List + </button>
                        </div>
                </div>
    </div>
     
    <div class="modal-body col-12  col-md-12 d-flex align-items-center" style="background-color:#141414;">
      
                <div class="col-md-7  p-0" style="background-color:#141414;">
                        <h3 class="text-white" style="font-weight:bold;">Film About:</h3>
                        <p class="text-white" ><span style="font-weight:bold;">Vision History: </span>{{getFilmDetails.release_date}}</p>
                        <p class="text-white" ><span style="font-weight:bold;">Content: </span>{{getFilmDetails.overview}}</p>
                       
                </div>
                <div class="col-md-5" style="background-color:#141414;">
                         <div class="col-md-12  d-flex justify-content-between" style="background-color:#141414;">   <span style="font-weight:bold;" class="text-white">Number of Votes</span> <p  class="text-white">{{getFilmDetails.vote_count}}</p></div>
                         <div class="col-md-12  d-flex justify-content-between " style="background-color:#141414;">   <span style="font-weight:bold;" class="text-white">Total Point</span>   <p  class="text-white">{{getFilmDetails.vote_average}}</p> </div>
                        <div class="col-md-12  d-flex justify-content-between " style="background-color:#141414;">   <span style="font-weight:bold;" class="text-white">Original Language</span>   <p  class="text-white">{{getFilmDetails.original_language}}</p> </div>

                </div>
    </div>
  </div>
</div>
</template>


<script>
import {mapGetters} from "vuex"

export default {
computed:{
        ...mapGetters(['getFilmDetails'])
},
        data(){
                return{
                        deneme:[]
                }
        },
        methods:{
                test(){
                             
                },
                addFilm(e){
                       this.$appAxios.post("filmList",e).then(response=>{
                                console.log(response)
                       })
                }       
        },
      

}
</script>

<style scoped>
.details-img{
        top: 50%;
        
}


</style>