import { Flex, Stack, StackItem, Text } from "@chakra-ui/react";

export default function PublicationCard({ content }) {
  return (
    <Flex
      w="90vw"
      flexDir={"column"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
      m="0 auto"
    >
      {content.map((d) => {
        return (
          <Stack key={d.id} bgColor={"#FBFBFB"} rounded={"12px"}>
            <Text fontSize={"18px"}>{d.content}</Text>
            <Text fontSize={"10px"}>{d.likes}</Text>
            <Text fontSize={"10px"}>{d.dislikes}</Text>
            <StackItem>icones</StackItem>
          </Stack>
        );
      })}
    </Flex>
  );
}
