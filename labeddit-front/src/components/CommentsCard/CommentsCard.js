import { Box, Flex, Text } from "@chakra-ui/react";

import IsLikedPost from "../utils/isLikedPost";
export default function CommentsCard({ content }) {
  console.log(content);
  return (
    <Flex
      w={{ base: "90vw", md: "1200px" }}
      flexDir={"column"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
      m="0 auto"
    >
      {content.map((d) => {
        return (
          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            alignItems={"self-start"}
            key={d.id}
            bgColor={"#FBFBFB"}
            rounded={"12px"}
            p="9px 10px"
            w={{ base: "full", md: "30%" }}
            h="167px"
            border={"1px solid #E0E0E0"}
          >
            <Text color="#6F6F6F" fontSize={"10x"}>
              {" "}
              Enviado por: {d.creator_name}
            </Text>
            <Text
              fontWeight={"semibold"}
              overflowWrap={"break-word"}
              fontSize={"18px"}
            >
              {d.content}
            </Text>
            <Flex justifyContent={"space-around"} gap={2} alignItems={"center"}>
              <IsLikedPost
                counter={d.counter}
                commentId={d.id}
                like={d.likes}
                dislike={d.dislikes}
              />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
