"use client"

import { SearchIcon } from "@chakra-ui/icons";
import { Box, VStack, Link, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export const SidePanel = () => {
  return (
    <Box w="250px" p={4} borderRight="1px solid" borderColor="gray.200">
                    <InputGroup display={{ base: "none", md: "block" }} width="200px">
                      <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.400" />
                      </InputLeftElement>
                      <Input placeholder="Search docs..." variant="filled" size="sm" />
                    </InputGroup>
      <VStack align="stretch" spacing={4}>
        <Text fontWeight="bold" fontSize="sm">Getting Started</Text>
        <Link href="#" fontSize="sm">Overview</Link>
        <Link href="#" fontSize="sm" fontWeight="semibold">Quickstart</Link>
        <Link href="#" fontSize="sm">Dashboard</Link>
        <Link href="#" fontSize="sm">API Reference</Link>
      </VStack>
    </Box>
  );
};