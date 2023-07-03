import { Button, Flex, Input } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToContent, goToSignup } from "../../router/coodinator";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";

export default function FormSignup() {
  const navigate = useNavigate();

  const { form, onChangeForm, cleanFields } = useForm({
    name:"",
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    cleanFields();
    goToContent(navigate);
  };

  return (
    <section>
      <Flex flexDir={"column"} px={{ base: "33px", md: "300px" }} mt={"50px"}>
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

          <ButtonCommon content={"Continuar"} />
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
