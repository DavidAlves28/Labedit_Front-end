import {  Flex, Stack, StackItem, Text } from "@chakra-ui/react";

export default function PublicationCard (){
return (
    <Flex w='90vw' justifyContent={'center'}  alignItems={'center'} m='0 auto'>
        <Stack bgColor={'#FBFBFB'} rounded={'12px'} >
            <Text fontSize={'12px'}>
            Enviado por: labaluno83 
            </Text>
            <Text fontSize={'18px'}>
            Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?  
            </Text>
            <StackItem>icones</StackItem>
        </Stack>    
    </Flex>
    )
}