import React from "react";
import FormSignup from "../components/forms/FormSignup";
import HeaderSignup from "../components/Headers/headerSignup";
import { Stack, Text } from "@chakra-ui/react";

export default function SignupPage() {
  return (
    <Stack maxW={"1280px"} m="0 auto">
      <HeaderSignup />
      <Stack w='100%' justify={'center'} align={'center'} >

      <Text align={'left'} fontSize={'33px'} color='#373737' fontWeight={'bold'} >
      Olá, boas vindas ao LabEddit ;)
      </Text>
      </Stack>
      <FormSignup />
    </Stack>
  );
}
