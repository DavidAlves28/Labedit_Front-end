import React from "react";
import FormSignup from "../components/forms/FormSignup";

import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Headers/header";


export default function SignupPage() {
  
  return (
    <Stack maxW={"1280px"} m="0 auto">
      <Header/>
      <Stack  ml='33px' justify={"center"} align={"center"}>
        <Text
          align={"left"}
          fontSize={"33px"}
          color="#373737"
          fontWeight={"bold"}
        >
          Olá, boas vindas ao LabEddit ;)
        </Text>
      </Stack>
      <FormSignup />
    </Stack>
  );
}
