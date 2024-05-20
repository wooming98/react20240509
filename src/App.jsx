import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>gray</Button>
        <Button colorScheme={"red"}>red</Button>
        <Button colorScheme={"orange"}>orange</Button>
        <Button colorScheme={"yellow"}>yellow</Button>
        <Button colorScheme={"green"}>green</Button>
        <Button colorScheme={"teal"}>teal</Button>
        <Button colorScheme={"blue"}>blue</Button>
        <Button colorScheme={"cyan"}>cyan</Button>
        <Button colorScheme={"purple"}>purple</Button>
        <Button colorScheme={"pink"}>pink</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          loading
        </Button>
        <Button colorScheme={"blue"} variant={"solid"}>
          1
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          2
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          3
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          4
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
