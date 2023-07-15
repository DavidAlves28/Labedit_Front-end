import { useState } from "react";
import axios from "axios";

export function useRequestComments(url, initialState) {
  const [dataComments, setDataComments] = useState(initialState);
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
      setDataComments(response.dataComments);     
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

  return [getAllPosts, dataComments, errorMessage, isError, isLoading];
}
