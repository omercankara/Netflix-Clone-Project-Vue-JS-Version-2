<template>
       <headerPage/>

             <div class="container-fluid">
                 <div class="row">
                        <div class="col-md-12  py-5 ">

                             <div class="row py-5">
                                     <div class="col-md-12  d-flex flex-column     align-items-center py-3    ">
                                                        <div class="col-md-3    d-flex flex-column align-items-center ">
                                                            <img src="../img/true.png" class="img-fluid w-25">
                                                            <h1 class="text-center">Planınızı Seçin</h1>
                                                        </div>
                                        </div>

                                     <div class="col-md-12     d-flex  justify-content-center align-items-center  ">
                                                        <div class="col-md-3 d-flex  justify-content-center align-items-center ">
                                                              <img src="../img/true.png" class="img-fluid " style="width:20%" >
                                                              <p class="ml-3">Taahhüt yok, istediğiniz zaman iptal edin.</p>
                                                        </div>      
                                                        
                                        </div>

                                            <div class="col-md-12     d-flex  justify-content-center align-items-center  ">
                                                        <div class="col-md-3 d-flex  justify-content-center align-items-center ">
                                                              <img src="../img/true.png" class="img-fluid" style="width:20%" >
                                                              <p class="ml-3">Tek, ve düşük ücretle istedğin zaman izle</p>
                                                        </div>      
                                                        
                                        </div>

                                                 <div class="col-md-12     d-flex  justify-content-center align-items-center  ">
                                                        <div class="col-md-3 d-flex  justify-content-center align-items-center ">
                                                              <img src="../img/true.png" class="img-fluid " style="width:20%" >
                                                              <p class="ml-3">Tüm cihazlarınızda sınırsız izleme imkânı..</p>
                                                        </div>      
                                                        
                                        </div>

                             
                                        <div class="col-md-12   d-flex flex-column justify-content-center align-items-center">
                                                        <div class="col-md-4 d-flex px-5 py-3 justify-content-center align-items-center">
                                                              <button class="btn btn-danger w-75 ml-5 px-5 py-4">İLERİ</button>
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
        }
}
</script>