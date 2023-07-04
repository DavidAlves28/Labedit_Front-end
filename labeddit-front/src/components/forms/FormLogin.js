import { Button, Flex, Input } from "@chakra-ui/react";
import { goToContent, goToSignup } from "../../router/coodinator";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { useContext, useState } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../apis/login";
import useForm from "../../hooks/useForm";

export default function FormLogin() {
  // GlobalState
  // const context = useContext(GlobalContext);
  const navigate = useNavigate();
  // context utilizado.
  // const {formLogin,onChangeFormLogin,login, isLoading, setIsLoading } = context;
  const [isLoading, setIsLoading] = useState(false)   
  const [isError, setIsError] = useState(false)   
    // form de login      
    const { form, onChangeForm, cleanFields } = useForm({
      email: "",
      password: "",
    });
  
    // button login da página login 
  
    const login = (event) => {
      event.preventDefault();
      loginAPI(form,navigate,setIsError,setIsLoading);
      setIsLoading(true);
      cleanFields();
    };
    
          
  
  return (
    <section>
      <Flex flexDir={"column"} px={{ base: "33px", md: "300px" }} mt={"50px"}>
        <form onSubmit={login}>
          <Input
            mb="12px"
            h="60px"
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChangeForm}
            placeholder="E-mail"
            required
          />
          <Input
            h="60px"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={onChangeForm}
            placeholder="Senha"
            required
          />

          <ButtonCommon
            isLoading={isLoading}
            type={"submit"}
            funcao={login}
            content={"Continuar"}
          />
        </form>
        <LineDivider />
        <Button
          h="51px"
          rounded={"27px"}
          colorScheme="blue"
          type="button"
          borderColor={"#FE7E02"}
          variant={"outline"}
          onClick={() => goToSignup(navigate)}
          textColor={"#FE7E02"}
          fontSize={"18px"}
        >
          Crie uma conta!
        </Button>
      </Flex>
    </section>
  );
}
