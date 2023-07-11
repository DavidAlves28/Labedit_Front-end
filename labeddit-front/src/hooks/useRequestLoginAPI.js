import { useState } from "react";
import axios from "axios";
import { goToContent } from "../router/coodinator";
import { useNavigate } from "react-router-dom";

export function useRequestLoginAPI(url) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMensage] = useState("");
  
  const navigate = useNavigate();

  const loginAPI = async (body) => {
    try {
      setIsLoading(true);
      const response = await axios.post(url, body);
      const token = response.data.token;
      // setar token no localstorage
      localStorage.setItem("token", token);
      // redirecionar para pagina de publicações!
      setIsLoading(false);
      // redirecionara para pagina de publicaçoes
      goToContent(navigate);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      // Enviar mensagem com qual tido erro
      setErrorMensage(error.response.data);
    }
  };

  return [loginAPI, errorMessage, isError, isLoading];
}
