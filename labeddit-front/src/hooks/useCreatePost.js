import axios from "axios";

import {  useState } from "react";


export default function useCreatePost(url, body) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMensage] = useState("");
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const createPost = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(url, body, headers);
      setData(response.data);
      // redirecionar para pagina de publicações!
      setIsLoading(false);
      // redirecionara para pagina de publicaçoes
    } catch (error) {
      setIsError(true);
      setIsLoading(false);      
      // Enviar mensagem com qual tido erro
      setErrorMensage(error.response.data[0].message);
    }
  };

  return [createPost, isError, isLoading, errorMessage,setIsError];
}
