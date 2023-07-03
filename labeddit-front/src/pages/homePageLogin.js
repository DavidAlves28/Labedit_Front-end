import { Stack } from "@chakra-ui/react";
import FormLogin from "../components/forms/FormLogin";
import HeaderHome from "../components/Headers/headerLogin";


export default function HomePageLogin() {
  return (
    <Stack maxW={'1280px'} m='0 auto'>
      <HeaderHome />     
      <FormLogin />
    </Stack>
  );
}
