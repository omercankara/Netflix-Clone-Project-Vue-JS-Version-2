import axios from "axios";

import config from "./settings"

export default {
    async getPopularFilms() {
        const promise = new Promise((resolve, reject) => {
            axios.get(config.BaseURL + "/discover/movie?sort_by=popularity.desc&" + config.API_URL).then(response => {
                resolve({
                    data: response.data
                })
            }).catch(error => reject(error))
        })
        promise.then(
            result => result,
            error => error
        )
        return promise
    },

    async getAllDaysFilms(){
        const promise = new Promise((resolve,reject)=>{
            axios.get(config.BaseURL  + config.API_URL_2).then(response=>{
                resolve({
                    data:response.data
                })
            }).catch(error => reject(error))
        })
        promise.then(
            result => result,
            error => error
        )
        return promise
    },

    async getTvSeries(){
        const promise = new Promise((resolve,reject)=>{
            axios.get(config.BaseURL +  config.API_URL_3).then(response=>{
                resolve({
                    data:response.data
                })
            }).catch(error=> reject(error))
        })
        promise.then(
            result => result,
            error => error
        )
        return promise
    }
}

