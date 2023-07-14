import { Skeleton, Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";
import FormPublication from "../components/forms/FormPublication";
import useProtectedPage from "../hooks/useProtectedPage";
import PublicationCard from "../components/PublicationCard/Publication";

import { useContext, useEffect} from "react";
import { GlobalContext } from "../globalContext/globalContext";
import PublicationMock from "../components/PublicationCard/publicationMock";

export default function PublicationsPage() {
  useProtectedPage();
  const context = useContext(GlobalContext);
  // import dos dados da GlobalState
  const { getAllPosts, isLoading, data } = context;

  useEffect(() => {
    getAllPosts();
  }, []);

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
      <Stack w={{ base: "90vw", md: "400px" }} m="0 auto">
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
      {/* cards das publicações */}
      {data.length === "" ? (
        <PublicationMock />
      ) : (
        <PublicationCard content={dataReverse(data)} />
      )}
    </Stack>
  );
}
