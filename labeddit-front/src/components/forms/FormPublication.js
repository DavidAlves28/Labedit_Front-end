import { FormControl, Stack, Textarea } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { BASE_URL } from "../../constants/BASE_URL";

import useCreatePost from "../API/useCreatePost";

export default function FormPublication() {
  const { form, onChangeForm, cleanFields } = useForm({
    content: "",
  });
  // context utilizado.

  // form de login
  const [createPost] = useCreatePost(`${BASE_URL}/posts`, form, {});

  // button login da página login
  const publicContent = async (event) => {
    event.preventDefault();
    await createPost();
    cleanFields();
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
        <ButtonCommon funcao={publicContent} content={"Postar"} />
        <LineDivider />
      </FormControl>
    </Stack>
  );
}
