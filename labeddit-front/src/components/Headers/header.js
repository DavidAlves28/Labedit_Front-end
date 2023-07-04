import { Box, Button, Img, Stack } from "@chakra-ui/react";
import logolabe from "../../assets/images/logolabeddit.svg";
import { Link, useNavigate } from "react-router-dom";
import { goToLogin } from "../../router/coodinator";
export default function Header() {
  const navigate = useNavigate();

  const isToken = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  };
  return (
    <Box w={{ base: "100vw", md: "720px" }} m="0 auto">
      <Stack rounded={"md"} bgColor="#EDEDED" m="0 auto" mt="40px">
        <Stack
          w={"100%"}
          h="50px"
          justify={"center"}
          direction={"row"}
          align={"center"}
        >
          <Img w="28px" src={logolabe} />
          <Stack
            pos="absolute"
            right={{ base: "10%", md: "35%" }}
            align={"end"}
            fontSize={"18px"}
            color={"#4088CB"}
          >
            {isToken ? (
              <Button onClick={() => logout()} color={"#4088CB"}>
                Logout
              </Button>
            ) : (
              <Link to="/">Entrar</Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
