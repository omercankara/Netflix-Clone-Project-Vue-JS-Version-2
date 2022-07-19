
import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/index"
import loginPage from '../components/loginPage.vue'
import home from "../components/homePage.vue"
import createAccount from "../components/createAccount.vue"
import accountPage from "../components/accountPage.vue"
import accountForm from "../components/accountForm.vue"
import local from "../components/localPage.vue"
import planForm from "../components/planForm.vue"
import successHeader from "../views/successHeader.vue"
import loginSuccess from "../views/loginSuccess"

import list from "../views/listPage.vue"

const routes = [
        {
                path: '/login',
                name: 'loginPage',
                component: loginPage
        },
        {
                path:'/success',
                name:'succes',
                component:successHeader
        },
        {
                path:'/giris',
                name:'giris',
                component:loginSuccess
        },
        

        {
                path: '/planform',
                name: 'planform',
                component: planForm
        },

        {
                path: '/accountPage',
                name: 'accountPage',
                component: accountPage
        },

        {
                path: '/accountForm',
                name: 'accountForm',
                component: accountForm
        },

        {
                path: '/createAccount',
                name: 'createAccount',
                component: createAccount
        },

        {
                path: '/local',
                name: 'local',
                component: local
        },

        {
                path: '/',
                name: 'home',
                component: home
        },
        {
                path:'/list',
                name:'list',
                component:list
        }

]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
})

router.beforeEach((to,from,next) => {
const _isAuthenticated = store.getters._isAuthenticated
const page = ["giris","list"];
 if(page.indexOf(to.name) > - 1 ){
      if(_isAuthenticated)next()
      else next(false)
 }       else{
        next(true)
 }
})

export default router

