import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL.js"
import { goToContent } from "../router/coodinator.js";




// const token =  localStorage.getItem('token') 
const url = `${BASE_URL}/users/login`



export const loginAPI =async (body,navigate)=>{
    
    try {
        const response = await axios.post(url,body)    
        const token = response.data.token    
        localStorage.setItem('token',token)
        goToContent(navigate)
                } catch(error) {
                console.log(error.response)
            }
}

