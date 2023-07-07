import { Alert, AlertIcon } from "@chakra-ui/react";

export const ReturnErrorAPI = (errorMsg, error) => {
  switch (error || errorMsg) {
    case errorMsg ==="'email' não encontrado":
      return (
        <Alert mt="10px" rounded={"lg"} status="error">
          <AlertIcon />
          Email não encontrado!
        </Alert>
      );
    case  errorMsg ==="'email' já está sendo usado":
      return (
        <Alert mt="10px" rounded={"lg"} status="error">
          <AlertIcon />
          Email já está sendo usado!
        </Alert>
      );

    default:
      return (
        <Alert mt="10px" rounded={"lg"} status="error">
          <AlertIcon />
          Confira todos os campos!
        </Alert>
      );
  }
};
