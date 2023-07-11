import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";
import { useEffect, useState } from "react";
import { goToContent } from "../../router/coodinator";
import { useNavigate } from "react-router-dom";
import { useLikePosts } from "../../hooks/useLikePosts";

export default function IsLikedPost(props) {
  // console.log(props);
 
  const { postId, like, dislike, counter } = props;
  const [loadingData, loading, error, setError, errorMessage] = useLikePosts();
  // console.log(postId);
  return (
    <Flex
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      border={"1px solid  #E0E0E0"}
      rounded={"22px"}
      w="100px"
      h="30px"
    >
      <ButtonLike
        loadingData={loadingData}
        like={like}
        dislike={dislike}
        id={postId}
      />
      <Text color="#6F6F6F">{counter}</Text>
      <ButtonDislike
        loadingData={loadingData}
        dislike={dislike}
        like={like}
        id={postId}
        counter={counter}
      />
    </Flex>
  );
}
