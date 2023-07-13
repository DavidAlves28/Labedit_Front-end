import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";
import { useContext, useEffect, useState } from "react";
import { goToContent } from "../../router/coodinator";
import { useNavigate } from "react-router-dom";
import { useLikePosts } from "../../hooks/useLikePosts";
import { GlobalContext } from "../../globalContext/globalContext";
import { useLikeDislikeComment } from "../../hooks/useLikeDislikeComment";

export default function IsLikedPost({ postId, like, dislike, counter, commentId }) {
  

  const [loadingData, loading, error, setError, errorMessage] = useLikePosts();
  const [updateLike] = useLikeDislikeComment();

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
        updateLike={updateLike}
        like={like}
        dislike={dislike}
        id={postId}
        commentId={commentId}
      />
      <Text color="#6F6F6F">{counter}</Text>
      <ButtonDislike
        loadingData={loadingData}
        updateLike={updateLike}
        commentId={commentId}
        dislike={dislike}
        like={like}
        id={postId}
        counter={counter}
      />
    </Flex>
  );
}
