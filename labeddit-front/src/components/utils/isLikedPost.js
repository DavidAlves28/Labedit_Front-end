import { Flex, Text } from "@chakra-ui/react";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";
import { useLikePosts } from "../../hooks/useLikePosts";
import { useLikeDislikeComment } from "../../hooks/useLikeDislikeComment";

export default function IsLikedPost({
  postId,
  like,
  dislike,
  counter,
  commentId,
}) {
  const [updateLikePosts] = useLikePosts();
  const [updateLikeComments] = useLikeDislikeComment();

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
        updateLikePosts={updateLikePosts}
        updateLikeComments={updateLikeComments}
        like={like}
        dislike={dislike}
        postId={postId}
        commentId={commentId}
      />
      <Text color="#6F6F6F">{counter}</Text>
      <ButtonDislike
        updateLikePosts={updateLikePosts}
        updateLikeComments={updateLikeComments}
        commentId={commentId}
        dislike={dislike}
        like={like}
        postId={postId}
        counter={counter}
      />
    </Flex>
  );
}
