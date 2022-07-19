import axios  from "axios";
import config from "./config"

export default{

    //#region addButton for favoriteButton
    async addFilmFavoriList(data){
        const promise = new Promise((resolve,reject)=>{
            axios.post(config.BaseURL + "/filmList/",data).then(response=>{
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
    //#endregion

    //#region getFavoriFilmListItem
    async getFavoriFilmListItem() {
        const promise = new Promise((resolve, reject) => {
            axios.get(config.BaseURL + "/filmList").then(response => {
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
    //#endregion

    //#region deleteListItem
    async deleteListItem(id){
        const promise = new Promise((resolve,reject)=>{
            axios.delete(config.BaseURL + '/filmList/'+ id).then(response=>{
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
    }
    //#endregion 
}