import { FormControl, Stack, Textarea } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import ButtonCommon from "../utils/ButtonCommon";
import LineDivider from "../utils/LineDivider";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import { useRequestDataPosts } from "../../hooks/useRequestDataPosts";

export default function FormPublication() {
  const { form, onChangeForm, cleanFields } = useForm({
    content: "",
  });
  // context utilizado.

  // form de login

  const [getAllPosts, data, errorMessage, isError, isLoading] =
    useRequestDataPosts(`${BASE_URL}/posts`, {});
  // button login da página login
  const publicContent = async (event) => {
    event.preventDefault();
    await getAllPosts(form);
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
