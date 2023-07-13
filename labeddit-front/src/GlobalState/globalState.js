import { useState } from "react";
import { GlobalContext } from "../globalContext/globalContext";
import { BASE_URL } from "../constants/BASE_URL";

import { useRequestDataPosts } from "../hooks/useRequestDataPosts";
import axios from "axios";

export default function GlobalState(props) {
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const [checkbox, setCheckbox] = useState(false);

  const [getAllPosts, data, errorMessage, isError, isLoading] =
    useRequestDataPosts(`${BASE_URL}/posts`, {});
  // retornar todos os comentários do post 
  const [dataGetC, setDataGetC] = useState([]);
  const getComments = async (postId) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${postId}`,headers);
      setDataGetC(response.data);
      // setIsLoading(false)
    } catch (error) {
      // setIsLoading(true)
    }
  };
  // criar comentário 
  const [dataComment, setDataComment] = useState([]);
  const createComment = async (id, body) => {
    try {
      // setIsLoading(true);
      const response = await axios.post(
        `${BASE_URL}/posts/${id}/comments`,
        body,
        headers
      );
      setDataComment(response.data);
      // redirecionar para pagina de publicações!
      // setIsLoading(false);
      // redirecionara para pagina de publicaçoes
    } catch (error) {
      // setIsError(true);
      // setIsLoading(false);
      // // Enviar mensagem com qual tido erro
      // setErrorMensage(error.response.data[0].message);
      console.log(error);
    }
  };
  const [post, setPost] = useState([]);
  const filterPost = (id) => {
 
      const posts = data && data.map((p) => p.id === id)
      setPost(posts)
    
  };

  
  // exportação de estados e funções.
  const context = {
    getAllPosts,
    isLoading,
    isError,
    checkbox,
    errorMessage,
    data,
    setCheckbox,
    getComments,
    createComment,
    dataComment,
    dataGetC,
    filterPost,
    post,
  };
  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
