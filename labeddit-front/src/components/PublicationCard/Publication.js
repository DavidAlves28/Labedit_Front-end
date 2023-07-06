import { Flex, Skeleton, Stack, StackItem, Text } from "@chakra-ui/react";
import { BASE_URL } from "../../constants/BASE_URL";
import { useRequestDataPosts } from "../../hooks/useRequestDataPosts";
import { useEffect } from "react";

export default  function PublicationCard() {
  const [data, errorMessage, isError, isLoading] =
    useRequestDataPosts(`${BASE_URL}/posts`, {});
  console.log(data);

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <Flex
      w="90vw"
      flexDir={"column"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
      m="0 auto"
    >
      
        
            <Stack  bgColor={"#FBFBFB"} rounded={"12px"}>
              {/* <Text fontSize={"12px"}>{data}</Text>
              <Text fontSize={"18px"}>{data.content}</Text>
              <Text fontSize={"10px"}>{data.likes}</Text>
              <Text fontSize={"10px"}>{data.dislikes}</Text> */}
              <StackItem>icones</StackItem>
            </Stack>
        
        
    </Flex>
  );
}
