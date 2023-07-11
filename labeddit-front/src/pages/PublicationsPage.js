import { Skeleton, Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";
import FormPublication from "../components/forms/FormPublication";
import useProtectedPage from "../hooks/useProtectedPage";
import PublicationCard from "../components/PublicationCard/Publication";
import { useRequestDataPosts } from "../hooks/useRequestDataPosts";
import { BASE_URL } from "../constants/BASE_URL";

export default function PublicationsPage() {
  useProtectedPage();

  const [data, isLoading] = useRequestDataPosts(`${BASE_URL}/posts`, []);

// Faz com que a publicação mostrar seja a primeira a ser rederizada!
  const dataReverse = (array) => {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  };
  dataReverse(data);
  if (isLoading) {
    return (
      <Stack maxW={"1280px"} m="0 auto">
        <Header />
        <FormPublication />
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack maxW={"1280px"} m="0 auto">
      <Header />
      {/* formulário para publicar */}
      <FormPublication />

      <PublicationCard content={dataReverse(data)} />
    </Stack>
  );
}
