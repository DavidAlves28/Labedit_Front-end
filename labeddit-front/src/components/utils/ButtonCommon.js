import { Button, Stack } from "@chakra-ui/react";

export default function ButtonCommon ({ content }) {
  return (
    <Stack justify={"center"} align={"center"}>
      <Button
        mt="15%"
        rounded={"27px"}
        w={{ base: "100%", md: "100%" }}
        h={{ base: "51px", md: "" }}
        bgGradient={"linear(to-r,#FF6489,#F9B24E)"}
        type="submit"
        textColor={'#FFFFFF'}
      >
        {content}
      </Button>
    </Stack>
  );
}
