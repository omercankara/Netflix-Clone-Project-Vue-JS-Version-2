<template>
<successHeader/>
        <div class="container-fluid">
                <div class="row py-0">
                        <div class="col-md-12 p-0  position-relative d-flex justify-content-start align-items-center">
                                  <iframe id="ytplayer" type="text/html" width="1360" height="740" src="https://www.youtube.com/embed/KPLWWIOCOOQ?autoplay=0&mute=0&controls=0" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                                   <div class="col-md-6 content-trailer-title  ml-3 px-5">
                                                <h1 class="text-white" style="font-weight:bold;">Game Of Thrones</h1>
                                                <p class="text-white">During an interplanetary voyage, a lonely man awakens from a dull sleep decades ahead of schedule and faces a moral dilemma regarding another traveller.</p>
                                                <div class="col-md-6   p-0">
                                                          <button class="btn btn-light">Play</button>
                                                          <button class="btn btn-light ml-3">more information</button>
                                                </div>
                                   </div>
                        </div>
                        
                </div>
        </div>
        <swiper/>
</template>
<script>
import successHeader from "./successHeader.vue"
import swiper from "./swiperPage.vue"
export default {
        components:{
                successHeader,
                swiper
        }
}
</script>                         

<style scoped>
.content-trailer-title{
        position: absolute;
}
</style>
