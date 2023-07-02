import { Stack } from "@chakra-ui/react";
import HeaderHome from "../components/Header/header";

import FormLogin from "../components/formLogin/FormLogin";

export default function HomePageLogin() {
  return (
    <Stack maxW={'1280px'} m='0 auto'>
      <HeaderHome />     
      <FormLogin />
    </Stack>
  );
}
