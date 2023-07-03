import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o token está armazenado no LocalStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // Se não houver token, o navigate vai redirecionar para a página de login
      navigate('/');
    }
  }, [navigate]);
};

export default useProtectedPage;

