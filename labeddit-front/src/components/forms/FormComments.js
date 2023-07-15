import { FormControl, Stack, Textarea } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { useContext} from "react";
import { GlobalContext } from "../../globalContext/globalContext";

export default function FormComments({ postId }) {
  const context = useContext(GlobalContext);

  const { createComment, isLoading,getComments} = context;

  const { form, onChangeForm, cleanFields } = useForm({
    content: "",
  });

  // funcão para publicar comentário do post
  const publicContent = async (event) => {
    event.preventDefault();
    await createComment(postId, form);
    cleanFields();
    getComments(postId );   
    
  };

  return (
    <Stack 
     py="30px" maxW="600px" m="0 auto">
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
        {/*  button reutilizável */}
        <ButtonCommon
          funcao={publicContent}
          isLoading={isLoading}
          content={"Responder"}
          type={"submit"}
        />
        <LineDivider />
      </FormControl>
    </Stack>
  );
}
