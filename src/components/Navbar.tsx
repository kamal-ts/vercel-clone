"use client"

import { 
    Box, 
    Flex, 
    Text, 
    Button, 
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import Link from "next/link";
  
  export default function Navbar() {
    return (
      <Box bg="white" borderBottom="1px" borderColor="gray.200" px={4} py={3}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">

          <Flex align="center">
            <Link href="/">
              <Text fontWeight="bold" fontSize="xl" mr={10}>Vercel</Text>
            </Link>
          </Flex>
  

          <Flex align="center" gap={4}>

  
            <Button variant="outline" size="sm" display={{ base: "none", md: "block" }}>
              Contact
            </Button>
  
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                <Avatar size="sm" name="User Name" src="" />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    );
  }