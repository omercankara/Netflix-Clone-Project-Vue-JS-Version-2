//GLOBAL AXİOS 
import axios from "axios"


export const appAxios =  axios.create({ //export const ile dışarıya aç
        baseURL:"http://localhost:3000"
})