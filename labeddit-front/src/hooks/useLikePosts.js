import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";

export const useLikePosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMensage] = useState("");
 
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const loadingData = async (id, body) => {
    setLoading(true);

    try {
      const response = await axios.put(
        `${BASE_URL}/posts/${id}/like`,
        body,
        headers
      );

      setLoading(false);
      
      return response.data;
    } catch (erro) {
      console.log(erro.message);

      setLoading(false);
      setError(true);
      setErrorMensage(erro.response);

      return erro.message;
    }
  };




  return [loadingData, loading, error, setError, errorMessage];
};
