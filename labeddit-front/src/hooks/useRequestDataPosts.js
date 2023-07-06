import { useEffect, useState } from "react";
import axios from "axios";
import { goToContent } from "../router/coodinator";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const getAllPosts = () => {
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data);
        // redirecionar para pagina de publicações!
        setIsLoading(false);
        // redirecionara para pagina de publicaçoes
        goToContent(navigate);
      })
      .catch((erro) => {
        setIsError(true);
        setIsLoading(false);
        // Enviar mensagem com qual tido erro
        setErrorMensage(erro.response.data);
      });
  };

  // const getAllPosts = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(url, headers);

  //     setData(response.data);
  //     // redirecionar para pagina de publicações!
  //     setIsLoading(false);
  //     // redirecionara para pagina de publicaçoes
  //     goToContent(navigate);
  //   } catch (error) {
  //     setIsError(true);
  //     setIsLoading(false);
  //     // Enviar mensagem com qual tido erro
  //     setErrorMensage(error.response.data);
  //   }
  // };
  useEffect(() => {
    getAllPosts();
  }, []);

  return [ data, errorMessage, isError, isLoading];
}
