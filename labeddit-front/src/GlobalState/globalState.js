import { useState } from "react";
import { GlobalContext } from "../globalContext/globalContext";


export default function GlobalState(props) {
  // coontrolar loadings nas requicões da API
  const [isLoading, setIsLoading] = useState(false);
  // controlar errors   nas requicões da API
  const [isError, setIsError] = useState(false);

  const [checkbox, setCheckbox] = useState(false);

  const [isEmailError, setIsEmailError] = useState("");

  // useEffect(() => {
  //     getPokemonsUrl() //  renderiza API
  //     setIsLoading(false)
  // }, [page])

  // exportação de estados e funções.
  const context = {
    checkbox,
    setCheckbox,
    isLoading,
    setIsLoading,
    isEmailError,
    isError,
    setIsError,
    setIsEmailError,
  };
  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
