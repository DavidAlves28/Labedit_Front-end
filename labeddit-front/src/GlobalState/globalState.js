import { useState } from "react";
import { GlobalContext } from "../globalContext/globalContext";
import { BASE_URL } from "../constants/BASE_URL";
import { useRequestDataPosts } from "../hooks/useRequestDataPosts";
import axios from "axios";

export default function GlobalState(props) {

  // verificar se token esta alocado no localstorage
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const token = localStorage.getItem("token")
  // checkbox para input signup
  const [checkbox, setCheckbox] = useState(false);

  // retornar todos os posts
  const [getAllPosts, data, errorMessage, isError, isLoading] =
    useRequestDataPosts(`${BASE_URL}/posts`, {});

  // retornar todos os comentários do post
  const [dataGetC, setDataGetC] = useState([]);
  const getComments = async (postId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/posts/${postId}/comments`,
        headers
      );
      setDataGetC(response.data);
      // setIsLoading(false)
    } catch (error) {
      // setIsLoading(true)
    }
  };
  
  // criar comentário
  const [dataComment, setDataComment] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const createComment = async (id, body) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BASE_URL}/posts/${id}/comments`,
        body,
        headers
      );
      setDataComment(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  // retornar uma postagem
  const [post, setPost] = useState([]);
  const getPostById = async (id) => {
    try {      
      const response = await axios.get(`${BASE_URL}/posts/${id}`, headers);
      setPost(response.data);
    } catch (error) {
      setError(error);
     
    }
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
    getPostById,
    post,
    token
    
  };
  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
