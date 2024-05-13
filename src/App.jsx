import React from "react";
import { Badge, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <div>
          <Button colorScheme={"blue"}>클릭</Button>
          <Button colorScheme={"green"}>
            알림 <Badge>new</Badge>
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
