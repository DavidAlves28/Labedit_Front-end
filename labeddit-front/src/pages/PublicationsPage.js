import { Skeleton, Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";
import FormPublication from "../components/forms/FormPublication";
import useProtectedPage from "../hooks/useProtectedPage";
import PublicationCard from "../components/PublicationCard/Publication";
import { useRequestDataPosts } from "../hooks/useRequestDataPosts";
import { BASE_URL } from "../constants/BASE_URL";

export default function PublicationsPage() {
  useProtectedPage();

  const [data,isLoading] = useRequestDataPosts(
    `${BASE_URL}/posts`,
    []
  );

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
    
      <PublicationCard content={data} />
    </Stack>
  );
}
