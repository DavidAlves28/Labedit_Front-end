import { Flex, Img, Stack, Text } from "@chakra-ui/react";
import LogoHomeLogin from "../../assets/images/labeddit.svg";
export default function HeaderHome() {
  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      mt={"133px"}
      
    >
      <Stack>
        <Img w="152px" src={LogoHomeLogin} />
      </Stack>
      <Text fontSize={"16px"}>O projeto de rede social da Labenu</Text>
    </Flex>
  );
}
