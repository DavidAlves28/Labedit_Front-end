import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";


export default function IsLikedPost(props) {
  const { postId, like, dislike, counter } = props;

  // const [likes,setLikes] = useState(liked)
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };


  const body = {
    like: true,
  };
  const isLiked = async () => {
    try {
      // setIsLoading(true);
      const response = await axios.put(
        `${BASE_URL}/posts/${postId}/like`,
        body,
        headers
      );
      console.log(response);
      
    } catch (error) {
      // setIsError(true);
      // setIsLoading(false);
      // Enviar mensagem com qual tido erro
      // setErrorMensage(error.response.data);
      console.log(error.response.data);
    }
  };

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
      <ButtonLike click={isLiked} like={like} />
      <Text color='#6F6F6F' >{counter}</Text>
      <ButtonDislike click={isLiked} dislike={dislike} />

    </Flex>
  );
}



