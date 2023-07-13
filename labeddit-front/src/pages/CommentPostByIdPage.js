import { useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { Button, Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";

import { useContext, useEffect } from "react";
import { GlobalContext } from "../globalContext/globalContext";
import FormComments from "../components/forms/FormComments";
import PublicationCard from "../components/PublicationCard/Publication";
import PostOrigin from "../components/PostOrigin/postOrigin";
import CommentsCard from "../components/CommentsCard/CommentsCard";

export default function CommentPostByIdPage (){
    
    useProtectedPage();
    const {id} = useParams()
    const context = useContext(GlobalContext);
    // import dos dados da GlobalState
    const {dataComment ,filterPost,getComments,post,dataGetC} = context;

    

    useEffect(()=>{
    //   getAllPosts()
    getComments(id)    
  },[])
  
  // filterPost(id)
  
 console.log(post, 'commn');
    
return (
    <Stack maxW={"1280px"} m="0 auto">
    
    <Header />
    <PostOrigin post={post} /> 
    
    {/* formulário para publicar */}
    <FormComments postId={id}/>

    <CommentsCard content={dataGetC}/>
    
  </Stack>
    
    )
}