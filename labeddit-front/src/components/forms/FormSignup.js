import {
  Alert,
  AlertIcon,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

import ButtonCommon from "../utils/ButtonCommon";
import { useContext } from "react";
import { singup } from "../../apis/signup";
import { GlobalContext } from "../../globalContext/globalContext";

export default function FormSignup() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const {
    isEmailError,
    isError,
    checkbox,
    setCheckbox,
    setIsLoading,
    setIsError,
    setIsEmailError,
    isLoading,
  } = context;

  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    singup(form, navigate, setIsLoading, setIsError, setIsEmailError);
    setIsLoading(true);
    cleanFields();
  };
  if (form.email === "" ) {
    setIsEmailError(false)
  } 
 
  return (
    <section>
      <Flex flexDir={"column"} px={{ base: "33px", md: "300px" }} mt={"70px"}>
        <FormControl isRequired>
          <Input
            mb="12px"
            h="60px"
            id="name"
            type="name"
            name="name"
            value={form.name}
            onChange={onChangeForm}
            placeholder="Apelido"
            required
          />
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
          {isEmailError ? (
            <Alert rounded={"lg"} status="error">
              <AlertIcon />
              Email já está sendo usado
            </Alert>
          ) : (
            <></>
          )}
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
          {isError  ? (
            <Alert rounded={"lg"} status="error">
              <AlertIcon />
              Confira todos os campos
            </Alert>
          ) : (
            <></>
          )}
          <Stack
            mt="40px"
            spacing={0}
            textAlign={"justify"}
            justify={"left"}
            align={"start"}
            fontSize={"14px"}
            gap={"12px"}
          >
            <Text>
              Ao continuar, você concorda com o nosso Contrato de usuário e
              nossa Política de Privacidade
            </Text>
            <Checkbox
              fontWeight={"semibold"}
              isRequired
              value={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
            >
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </Checkbox>
          </Stack>
        </FormControl>
        {isError || !checkbox ? (
          <Alert rounded={"lg"} status="error">
            <AlertIcon />
            Você deve concordar para continuar
          </Alert>
        ) : (
          <></>
        )}
        {checkbox ? (
          <ButtonCommon
            isLoading={isLoading}
            type={"submit"}
            funcao={login}
            content={"Cadastrar"}
          />
        ) : (
          
          <ButtonCommon isLoading={isLoading} content={"Cadastrar"} />
        )}
      </Flex>
    </section>
  );
}
