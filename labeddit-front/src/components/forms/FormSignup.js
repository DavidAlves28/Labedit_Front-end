import { Checkbox, Flex, Input, Stack, Text } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToContent } from "../../router/coodinator";
import ButtonCommon from "../utils/ButtonCommon";
import { useEffect, useState } from "react";
import { singup } from "../../apis/signup";

export default function FormSignup() {
  const navigate = useNavigate();

  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    email: "",
    password: "",
  });
  // console.log(form);
  const login = (event) => {
    event.preventDefault();
    cleanFields();
    goToContent(navigate);
    singup(form)
  };
 
 
  const [checkbox, setCheckbox] = useState(false);
  return (
    <section>
      <Flex flexDir={"column"} px={{ base: "33px", md: "300px" }} mt={"70px"}>
        <form onSubmit={login}>
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
        </form>

        {checkbox ? (
          <ButtonCommon type={"submit"} funcao={login} content={"Cadastrar"} />
        ) : (
          <ButtonCommon content={"Cadastrar"} />
        )}
      </Flex>
    </section>
  );
}
