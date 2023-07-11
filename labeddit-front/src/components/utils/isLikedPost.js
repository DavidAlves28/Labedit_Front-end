import { Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";
import { useEffect, useState } from "react";

export default function IsLikedPost(props) {
  const { postId, like, dislike, counter } = props;

  // const [likes,setLikes] = useState(liked)
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  // if(likes){
  // setLikes(true)
  // } else{
  // setLikes(false)
  // }

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

      // setData(response.data);
      // // redirecionar para pagina de publicações!
      // setIsLoading(false);
      // // redirecionara para pagina de publicaçoes
      // goToContent(navigate);
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
      <Text>{counter}</Text>
      <ButtonDislike click={isLiked} dislike={dislike} />
    </Flex>
  );
}

{
  /* <Stack direction="row">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="21"
  height="20"
  viewBox="0 0 21 20"
  fill="none"
>
  <path
    d="M9.09076 1.53713C9.82256 0.613067 11.2243 0.611341 11.9581 1.53392L17.0657 7.95525C17.8337 8.92047 17.1539 10.3466 15.9208 10.3587L14.5331 10.3725L14.5318 15.0372C14.5318 15.2776 14.4844 15.5156 14.3923 15.7377C14.3002 15.9598 14.1652 16.1616 13.9951 16.3315C13.825 16.5014 13.6231 16.6361 13.4009 16.728C13.1788 16.8198 12.9407 16.867 12.7002 16.8668L8.34195 16.8628C7.85699 16.8623 7.39208 16.6692 7.04935 16.3261C6.70662 15.983 6.51408 15.5179 6.51404 15.033L6.51355 10.3735L5.15815 10.3727C3.91958 10.372 3.22869 8.94266 3.99698 7.97177L9.09076 1.53713ZM11.2758 2.07618C11.1859 1.96317 11.0717 1.87192 10.9416 1.80926C10.8115 1.74659 10.6689 1.71413 10.5245 1.7143C10.3801 1.71447 10.2376 1.74725 10.1076 1.81022C9.97768 1.87318 9.86363 1.96468 9.77401 2.07791L4.68022 8.51255C4.36399 8.91259 4.64818 9.50094 5.15839 9.50143L6.94958 9.50217C7.0068 9.50216 7.06347 9.51343 7.11635 9.53533C7.16922 9.55722 7.21727 9.58932 7.25773 9.62979C7.2982 9.67026 7.3303 9.7183 7.3522 9.77117C7.37409 9.82405 7.38536 9.88072 7.38535 9.93795L7.38511 15.033C7.38518 15.287 7.4861 15.5307 7.6657 15.7103C7.84529 15.89 8.08888 15.9911 8.34293 15.9913L12.7012 15.9952C12.8271 15.9953 12.9518 15.9706 13.0682 15.9225C13.1846 15.8744 13.2903 15.8038 13.3794 15.7148C13.4685 15.6258 13.5392 15.5201 13.5874 15.4038C13.6356 15.2875 13.6605 15.1628 13.6605 15.0369L13.6618 9.94091C13.6617 9.82609 13.707 9.71591 13.7878 9.63431C13.8686 9.5527 13.9783 9.50628 14.0931 9.50513L15.9121 9.48738C16.4199 9.48245 16.6996 8.89509 16.3836 8.49776L11.2758 2.07618Z"
    fill="#6F6F6F"
  />
</svg>
<Icon as={seta} transform={"rotate(180deg)"} />

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19"
  height="20"
  viewBox="0 0 19 20"
  fill="#6F6F"
>
  <path
    d="M10.1147 13.5859H14.7067C15.543 13.5859 16.2001 12.9204 16.2001 12.1243V5.8616C16.2001 5.06547 15.543 4.4 14.7067 4.4H4.62672C3.79046 4.4 3.13339 5.06547 3.13339 5.8616V12.1243C3.13339 12.9204 3.79046 13.5859 4.62672 13.5859H6.12006V16.5333H6.12286L6.12472 16.5324L10.1157 13.5859H10.1147ZM6.68006 17.2828C6.48137 17.4293 6.23312 17.4919 5.98874 17.4571C5.74437 17.4224 5.52339 17.2931 5.37339 17.0971C5.25314 16.9386 5.18792 16.7453 5.18766 16.5464V14.5192H4.62766C3.28739 14.5192 2.20099 13.4468 2.20099 12.1243V5.8616C2.20006 4.53907 3.28646 3.46667 4.62672 3.46667H14.7067C16.047 3.46667 17.1334 4.53907 17.1334 5.8616V12.1243C17.1334 13.4477 16.047 14.5192 14.7067 14.5192H10.4227L6.67912 17.2828H6.68006Z"
    fill="#6F6F6F"
  />
</svg>
</Stack> */
}
