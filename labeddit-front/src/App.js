import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./GlobalState/globalState";
import Router from "./router/router";

function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
