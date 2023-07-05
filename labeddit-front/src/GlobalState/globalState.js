import { useState } from "react";
import { GlobalContext } from "../globalContext/globalContext";

export default function GlobalState(props) {
  // coontrolar loadings nas requicões da API
  const [isLoading, setIsLoading] = useState(false);
  // controlar errors   nas requicões da API
  const [isError, setIsError] = useState(false);

  const [errorStatus, setErrorStatus] = useState("");

  const [checkbox, setCheckbox] = useState(false);

  const [isEmailError, setIsEmailError] = useState("");

 

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
    errorStatus, setErrorStatus
  };
  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
