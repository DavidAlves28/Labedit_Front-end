import { useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { Button, Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";

import { useContext, useEffect } from "react";
import { GlobalContext } from "../globalContext/globalContext";
import FormComments from "../components/forms/FormComments";
import PublicationCard from "../components/PublicationCard/Publication";
import PostOrigin from "../components/PostOrigin/postOrigin";

export default function CommentPostByIdPage ({content}){
    
    useProtectedPage();
    const {id} = useParams()
    const context = useContext(GlobalContext);
    // import dos dados da GlobalState
    const { getComments,dataGetC,dataComment } = context;

    console.log(id);
   

    useEffect(()=>{
    getComments(id)
    },[])
    
return (
    <Stack maxW={"1280px"} m="0 auto">
    
    <Header />
    {/* <PostOrigin postId={id} />  */}
    <PublicationCard content={dataGetC} />
    
    {/* formulário para publicar */}
    <FormComments postId={id}/>

    <PublicationCard content ={dataComment} />
  </Stack>
    
    )
}