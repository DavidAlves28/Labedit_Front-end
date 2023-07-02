import { Center, Stack } from "@chakra-ui/react";

export default function LineDivider() {
  return (
    <Center height="50px">
      <Stack
        h="1px"
        w="100%"
        bgGradient={"linear(to-r,#FF6489,#F9B24E)"}
        orientation="vertical"
      />
    </Center>
  );
}
