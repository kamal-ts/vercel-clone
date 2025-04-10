import { ChakraProvider, Flex } from "@chakra-ui/react";
import { MiddleSection } from "../components/home/MiddleSection";

export default function Home() {
  return (
    <ChakraProvider>
      <Flex>
        <MiddleSection />
      </Flex>
    </ChakraProvider>
  );
}