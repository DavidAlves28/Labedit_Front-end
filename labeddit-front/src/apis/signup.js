import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL.js";
import { goToContent } from "../router/coodinator.js";

// const token =  localStorage.getItem('token')
const url = `${BASE_URL}/users/signup`;

export const singup = async (body, navigate,setIsLoading,setIsError,setIsEmailError) => {
  try {
    const response = await axios.post(url, body);
    const token = response.data.token;
    localStorage.setItem("token", token);
    goToContent(navigate);
} catch (error) {
    setIsError(true)
    setIsEmailError(error.response.data);
    setIsLoading(false)
  }
};
