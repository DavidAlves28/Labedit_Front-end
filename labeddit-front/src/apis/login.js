import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL.js";
import { goToContent, goToLogin } from "../router/coodinator.js";
import { useLocation } from "react-router-dom";

// função de login 

export const loginAPI = async (body, navigate,setIsError,setIsLoading) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, body);
    const token = response.data.token;
    // setar token no localstorage
    localStorage.setItem("token", token);
    // redirecionar para pagina de publicações!
    goToContent(navigate);
  } catch (error) {
    setIsError(true)
    setIsLoading(false)
    goToLogin(navigate)    
    setIsError(false)
  }
};
