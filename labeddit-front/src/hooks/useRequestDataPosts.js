import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestDataPosts(url, initialState) {
  const [data, setData] = useState(initialState);
  const [isError, setIsError] = useState(false);  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMensage] = useState("");
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  
  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url, headers);
      setData(response.data)  
      
      
      // redirecionar para pagina de publicações!
      setIsLoading(false);
      // redirecionara para pagina de publicaçoes
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      // Enviar mensagem com qual tido erro
      setErrorMensage(error.response.data);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return [getAllPosts, data, errorMessage, isError, isLoading];
}
