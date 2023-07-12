import { FormControl, Stack,Textarea } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { useContext,  } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
import { ReturnErrorAPI } from "../utils/ReturnErrorAPI";

export default function FormComments({postId}) {
  const context = useContext(GlobalContext);

  const { createComment } = context;
  
  const { form, onChangeForm, cleanFields } = useForm({
    content: "",
  });
  // context utilizado.

  // form de login
 

  // button login da página login
  const publicContent = async (event) => {
    event.preventDefault();
    await createComment(postId,form);
    cleanFields();
    // getAllPosts();
  };
  
  return (
    <Stack py="30px" maxW="600px" m="0 auto">
      <FormControl>
        <Textarea
          isRequired
          id="content"
          type="content"
          name="content"
          value={form.content}
          onChange={onChangeForm}
          bgColor={"#EDEDED"}
          minW="364px"
          minH="131px"
          placeholder="Escreva seu post..."
          mb="15px"
        />
        {/* {isError ? ReturnErrorAPI(errorMessage, isError) : <></>} */}
        <ButtonCommon
        
          funcao={publicContent}
        //   isLoading={isLoading}
          content={"Postar"}
        />
        <LineDivider />
      </FormControl>
    </Stack>
  );
}
