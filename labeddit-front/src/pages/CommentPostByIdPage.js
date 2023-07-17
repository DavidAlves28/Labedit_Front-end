import { useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { Skeleton, Stack, Text } from "@chakra-ui/react";
import Header from "../components/Headers/header";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../globalContext/globalContext";
import FormComments from "../components/forms/FormComments";
import PostOrigin from "../components/PostOrigin/postOrigin";
import CommentsCard from "../components/CommentsCard/CommentsCard";
import { returnArrayReverse } from "../components/utils/returnArrayReverse";

export default function CommentPostByIdPage() {
  useProtectedPage();
  const { id } = useParams();
  const context = useContext(GlobalContext);
  // import dos dados da GlobalState
  const { getPostById, isLoading, getComments, dataGetC } = context;
  // console.log(dataGetC);
  const returnCommentsNumber = dataGetC.filter((f) => {
    return id === f.id_post;
  });
  useEffect(() => {
    getPostById(id);
    getComments(id);
  }, []);

  if (isLoading) {
    return (
      <Stack w={{ base: "90vw", md: "400px" }} m="0 auto">
        <Header />
        <Skeleton height="20px" />
        <FormComments postId={id} />
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack maxW={"1280px"} m="0 auto" mb="30px">
      <Header />

      <PostOrigin postId={id} />

      {/* formulário para publicar */}
      <FormComments postId={id} />
     
      {returnCommentsNumber.length === 0 ? (
        <Stack w={{ base: "90vw", md: "1200px" }} m="0 auto">
          <Text align={"center"} fontWeight={"semibold"}>
            Sem comentários por enquanto para está postagem.
          </Text>
        </Stack>
      ) : (
        <CommentsCard postId={id} content={returnArrayReverse(dataGetC)} />
      )}
    </Stack>
  );
}
