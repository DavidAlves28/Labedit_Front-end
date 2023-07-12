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
          String must contain at least 4 character(s)
        </Alert>
      );
      case  errorMsg ==="String must contain at least 4 character(s)":
        return (
          <Alert m="10px"  w='90%' rounded={"lg"} status="error">
            <AlertIcon />
             O campo deve conter no mínimo 4 caracteres
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
