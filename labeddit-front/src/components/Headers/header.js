import { Box, Img, Stack, Text } from "@chakra-ui/react";
import logolabe from "../../assets/images/logolabeddit.svg";
import { Link,useParams } from "react-router-dom";

import { TfiClose } from "react-icons/tfi";
export default function Header() {
  
  const { id } = useParams();
  const location = window.location.pathname === `/publications/${id}`;

  const isToken = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <Box w={{ base: "100vw", md: "720px" }} m="0 auto">
      <Stack rounded={"md"} bgColor="#EDEDED" m="0 auto" mt="40px">
        <Stack
          w={"100%"}
          h="50px"
          justify={"space-around"}
          direction={"row"}
          align={"center"}
        >
          {/* Button para fechar pagina de comentario */}
          <Link to="/publications">{location && <TfiClose />}</Link>

          <Img w="28px" src={logolabe} />

          <Stack
            right={{ base: "10%", md: "35%" }}
            align={"end"}
            fontSize={"18px"}
            color={"#4088CB"}
          >
            {isToken ? (
              <Link onClick={() => logout()} to="/" color={"#4088CB"}>
                <Text fontWeight={"semibold"}>Logout</Text>
              </Link>
            ) : (
              <Link to="/">Entrar</Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
