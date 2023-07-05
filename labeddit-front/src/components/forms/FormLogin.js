import { Alert, AlertIcon, Button, Flex, Input } from "@chakra-ui/react";
import { goToSignup } from "../../router/coodinator";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { useContext } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../apis/login";
import useForm from "../../hooks/useForm";

export default function FormLogin() {
  // GlobalState
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  // context utilizado.
  const {
    isLoading,
    setIsLoading,
    isError,
    setIsError,   
  } = context;

  // form de login
  const { form, onChangeForm, cleanFields } = useForm({
    email: "",
    password: "",
  });

  // button login da página login
  
  const login = (event) => {
    event.preventDefault();
    loginAPI(form, navigate, setIsError, setIsLoading);
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

          {isError ? (
            <Alert mt="10px" rounded={"lg"} status="error">
              <AlertIcon />
              Confira todos os campos
            </Alert>
          ) : (
            <></>
          )}

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
