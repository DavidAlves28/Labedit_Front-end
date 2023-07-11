import { Box, Flex, Text } from "@chakra-ui/react";

import IsLikedPost from "../utils/isLikedPost";
import ModalComments from "../ModalComments/ModalComments";
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
          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            alignItems={"self-start"}
            key={d.id}
            bgColor={"#FBFBFB"}
            rounded={"12px"}
            p="9px 10px"
            w="full"
            h="167px"
            border={"1px solid #E0E0E0"}
          >
            <Text  color='#6F6F6F' fontSize={"10x"}> Enviado por: {d.creator.name}</Text>
            <Text fontWeight={"semibold"} overflowWrap={'break-word'} fontSize={"18px"}>
              {d.content}
            </Text>
            <Flex justifyContent={'space-around'}  gap={2} alignItems={'center'} >
              <IsLikedPost
                counter={d.counter}
                postId={d.id}
                like={d.likes}
                dislike={d.dislikes}
              />
              <ModalComments  />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
