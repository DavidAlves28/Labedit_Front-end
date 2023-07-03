import { Button, Stack } from "@chakra-ui/react";
import Loading from "./Loading";

export default function ButtonCommon ({isLoading, content ,funcao,type}) {
  return (
    <Stack justify={"center"} align={"center"}>
     {isLoading ? (  <Button
        onClick={funcao}
        type={type}
        mt="15%"
        rounded={"27px"}
        w={{ base: "100%", md: "100%" }}
        h={{ base: "51px", md: "" }}
        bgGradient={"linear(to-r,#FF6489,#F9B24E)"}
        textColor={'#FFFFFF'}
      >
        <Loading/>
      </Button>) :(  <Button
        onClick={funcao}
        type={type}
        mt="15%"
        rounded={"27px"}
        w={{ base: "100%", md: "100%" }}
        h={{ base: "51px", md: "" }}
        bgGradient={"linear(to-r,#FF6489,#F9B24E)"}
        textColor={'#FFFFFF'}
      >
        {content}
      </Button>)}
    
    </Stack>
  );
}
