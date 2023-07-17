import { FormControl, Stack, Textarea } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { BASE_URL } from "../../constants/BASE_URL";
import useCreatePost from "../../hooks/useCreatePost";
import { useContext } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
import { ReturnErrorAPI } from "../utils/ReturnErrorAPI";

export default function FormPublication() {
  const context = useContext(GlobalContext);

  const { getAllPosts,token } = context;

  const { form, onChangeForm, cleanFields } = useForm({
    content: "",
  });
  // context utilizado.

  // request para criar post
  const [createPost, isError, isLoading, errorMessage] = useCreatePost(
    `${BASE_URL}/posts`,
    form,
    {}
  );

  // button login da página login
  const publicContent = async (event) => {
    event.preventDefault();
    await createPost();
    token &&  getAllPosts();
    cleanFields();
  };

  return (
    <Stack minW="364px" py="30px" maxW="600px" m="0 auto">
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
        {isError ? ReturnErrorAPI(errorMessage, isError) : <></>}
        <ButtonCommon
          funcao={publicContent}
          isLoading={isLoading}
          content={"Postar"}
        />
        <LineDivider />
      </FormControl>
    </Stack>
  );
}
