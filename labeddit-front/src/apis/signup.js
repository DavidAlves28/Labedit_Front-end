import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL.js"



// const token =  localStorage.getItem('token') 
const url = `${BASE_URL}/users/signup`


export const singup =async (body)=>{
    try {
        const response = await axios.post(url,body)    
        const token = response.data.token    
        localStorage.setItem('token',token)
            
                } catch(error) {
                console.log(error.response)
            }
}

