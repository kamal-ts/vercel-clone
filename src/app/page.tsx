import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { MiddleSection } from "../components/home/MiddleSection";
import { SidePanel } from "@/components/SidePanel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Flex>
        {/* SidePanel di sebelah kiri */}
        <SidePanel />
        
        {/* MiddleSection sebagai konten utama */}
        <Box flex={1} > {/* ml untuk memberi space sebesar width SidePanel */}
          <MiddleSection />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}