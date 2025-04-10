import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { MiddleSection } from "../components/home/MiddleSection";
import { SidePanel } from "@/components/SidePanel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Flex>
        <SidePanel />
        <Box flex={1} > 
          <MiddleSection />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}