import { Alert, AlertIcon, Box, Button, Flex, Input } from "@chakra-ui/react";
import { goToSignup } from "../../router/coodinator";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";

import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useRequestLoginAPI } from "../../hooks/useRequestLoginAPI";
import { BASE_URL } from "../../constants/BASE_URL";
import { useState } from "react";

export default function FormLogin() {
  // GlobalState

  const navigate = useNavigate();
  // context utilizado.
  const [data, setData] = useState({});

  // form de login
  const { form, onChangeForm, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const [loginAPI, errorMessage, isError, isLoading] = useRequestLoginAPI(
    `${BASE_URL}/users/login`,
    {}
  );
  // button login da página login
  const login = async (event) => {
    event.preventDefault();
    setData(await loginAPI( form));
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
          <Box mt='12%' >
          

            <ButtonCommon
              isLoading={isLoading}
              type={"submit"}
              funcao={login}
              content={"Continuar"}
            />
          </Box>
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
