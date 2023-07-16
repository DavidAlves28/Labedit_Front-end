import { Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
import IsLikedPost from "../utils/isLikedPost";
import { Link } from "react-router-dom";
import ModalComments from "../ModalComments/ModalComments";

export default function PostOrigin ({postId}){
  const context = useContext(GlobalContext);
  // // import dos dados da GlobalState
  const { getPostById, post} = context;
  
  useEffect(()=>{
  getPostById(postId)
  },[]) 

  return (
    <Flex
      w={{ base: "90vw", md: "1200px" }}
      flexDir={"column"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
      m="0 auto"
    >
      {post.map((d) => {
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
              Enviado por: {d.creator.name}
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
                postId={d.id}
                like={d.likes}
                dislike={d.dislikes}
              />

              <Link  to={`/feed/${d.id}`} >
                <ModalComments />
              </Link>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
    