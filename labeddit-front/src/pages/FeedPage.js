import { Skeleton, Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";
import FormPublication from "../components/forms/FormPublication";
import useProtectedPage from "../hooks/useProtectedPage";
import PublicationCard from "../components/PublicationCard/Publication";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../globalContext/globalContext";
import { returnArrayReverse } from "../components/utils/returnArrayReverse";

export default function FeedPage() {
  useProtectedPage();
  const context = useContext(GlobalContext);
  // import dos dados da GlobalState
  const { getAllPosts, isLoading, data} = context;



  if (isLoading) {
    return (
      <Stack w={{ base: "90vw", md: "400px" }} m="0 auto">
        <Header />
        <FormPublication />
        <Stack>
          <Skeleton height="120px" />
          <Skeleton height="120px" />
          <Skeleton height="120px" />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack maxW={"1280px"} m="0 auto" mb="30px">
      <Header />
      {/* formulário para publicar */}
      <FormPublication />
      {/* cards das publicações */}
      <PublicationCard content={returnArrayReverse(data)} />
    </Stack>
  );
}
