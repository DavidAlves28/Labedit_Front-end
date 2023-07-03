import { Box, Button, Img, Stack } from "@chakra-ui/react";
import logolabe from "../../assets/images/logolabeddit.svg";
import { Link } from "react-router-dom";
export default function Header() {
  const isToken = localStorage.getItem('token') 
  const logout = ()=>{
  
  }
  return (
    <Box w={{base:'100vw',md:'720px'}}  m='0 auto'>
      <Stack rounded={'md'} bgColor="#EDEDED"  m='0 auto' mt="40px">
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
            right={{base:"10%",md:"35%"}}
            align={"end"}
            fontSize={"18px"}
            color={"#4088CB"}
          >
           {!!isToken ?<Button  color={"#4088CB"} >Logout</Button>  : <Link to="/">Entrar</Link> }
            
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
