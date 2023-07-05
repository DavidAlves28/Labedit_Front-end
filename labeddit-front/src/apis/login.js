import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL.js";
import { goToContent, goToLogin } from "../router/coodinator.js";

// função de login

export const loginAPI = async (body, navigate, setIsError, setIsLoading) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, body);
    const token = response.data.token;
    // setar token no localstorage
    localStorage.setItem("token", token);
    // redirecionar para pagina de publicações!
    goToContent(navigate);
    setIsError(false);
    setIsLoading(false);
  } catch (error) {
    setIsError(true);
    setIsLoading(false);
    console.log(error.response.status)

    goToLogin(navigate);
  }
};
