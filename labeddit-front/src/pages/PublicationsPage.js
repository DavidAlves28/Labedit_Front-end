import { Stack } from "@chakra-ui/react";
import Header from "../components/Headers/header";
import FormPublication from "../components/forms/FormPublication";
import useProtectedPage from "../hooks/useProtectedPage";
import PublicationCard from "../components/PublicationCard/Publication";

export default function PublicationsPage() {
  useProtectedPage();

  return (
    <Stack maxW={'1280px'} m='0 auto'>
      <Header />
      <FormPublication />
      <PublicationCard/>
    </Stack>
  );
}
