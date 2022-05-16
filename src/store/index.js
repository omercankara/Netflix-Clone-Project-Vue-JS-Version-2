import { createStore } from 'vuex'

export default createStore({
  state: {
     user:null,
     saltKey:"bookLike123!456" ,
    data:[],
    filmList:[]
  },

  getters: {
       _isAuthenticated : state => state.user != null, //Giriş yapılıp yapılmadığını getir

       _getCurrentUser(state){
                const user  =state.user
                delete user?.password
                return user //USER BİLGİSİNİ  ADMİNE ŞİFRESİZ OLARAK GETİR (KULLANICI GİZLİLİĞİ.)
       },
       _saltKey : state => state.saltKey,

       getFilmDetails(state){
                return state.data
       },
       getFavoriFilm(state){
                return state.filmList
        }
  },    
  mutations: {  
     setUser(state,user){
                state.user = user
     },
     setData(state,data){
        state.data = data
     },
     favoriFilm(state,film){
        state.filmList.push(film)
     },
     logOut(state){
        state.user = null;
     }
  },
  actions: {
  },
  modules: {
  }
})
