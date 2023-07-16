import {
  Alert,
  AlertIcon,
  Box,
  Checkbox,
  Flex,
  FormControl,
  Highlight,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import ButtonCommon from "../utils/ButtonCommon";
import { useContext, useState } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
import { useRequestLoginAPI } from "../../hooks/useRequestLoginAPI";
import { BASE_URL } from "../../constants/BASE_URL";
import { ReturnErrorAPI } from "../utils/ReturnErrorAPI";
import { Link } from "react-router-dom";

export default function FormSignup() {
  const [data, setData] = useState({});

  const context = useContext(GlobalContext);
  const { checkbox, setCheckbox } = context;

  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [loginAPI, errorMessage, isError, isLoading] = useRequestLoginAPI(
    `${BASE_URL}/users/signup`,
    {}
  );

  // button login da página login
  const login = async (event) => {
    event.preventDefault();
    setData(await loginAPI(form));
    cleanFields();
  };

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
          {isError ? ReturnErrorAPI(errorMessage, isError) : <></>}
          <Stack
            mt="40px"
            spacing={0}
            textAlign={"justify"}
            justify={"left"}
            align={"start"}
            fontSize={"14px"}
            gap={"12px"}
          >
            <Box>
              <Text>
                <Highlight
                  query={["Contrato de usuário", "Política de Privacidade"]}
                  styles={{ py: "1", fontWeight: "normal", color: "#4088CB" }}
                >
                  Ao continuar, você concorda com o nosso, Contrato de usuário e
                  nossa Política de Privacidade
                </Highlight>
              </Text>
            </Box>
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
        <Box mt="12%">
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
        </Box>
      </Flex>
    </section>
  );
}
