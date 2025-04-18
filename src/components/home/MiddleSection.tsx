"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Code,
  Link,
  Button,
  UnorderedList,
  ListItem,
  LinkBox,
} from "@chakra-ui/react";
import { h4 } from "framer-motion/client";

export const MiddleSection = () => {
  return (
    <Box maxW="800px" mx="auto" py={8} px={4} fontSize={"lg"}>
      <Heading as="h1" size="xl" mb={6}>
        Getting started with Vercel Web Analytics
      </Heading>

      <Text fontSize="lg" mb={4}>
        Vercel Web Analytics provides you detailed insights into your website's
        visitors. This quickstart guide will help you get started with using
        Analytics on Vercel.
      </Text>
      <Text fontSize={"lg"} mb={4}>
        This guide will help you get started with using Vercel Web Analytics on
        your project, showing you how to enable it, add the package to your
        project, deploy your app to Vercel, and view your data in the dashboard.
      </Text>
      <Text fontSize={"lg"} fontWeight={"semibold"} mb={8}>
        Select your framework to view instructions on using the Vercel Web
        Analytics in your project.
      </Text>

      <Box mb={8}>
        <Heading
          size={"lg"}
          _hover={{
            textDecoration: "underline",
            textDecorationThickness: "1px",
            textUnderlineOffset: "12px",
          }}
          mb={6}
        >
          Prerequisites
        </Heading>
        <UnorderedList styleType="'-  '">
          <ListItem>
            A Vercel account. If you don't have one, you can
            <Link
              href="https://vercel.com/signup"
              textDecoration={"underline"}
              fontWeight="semibold"
              textDecorationThickness= {"1px"}
            textUnderlineOffset= {"6px"}
            px={"4px"}
            >
              sign up for free
            </Link>
            .
          </ListItem>
          <ListItem>
            A Vercel project. If you don't have one, you can <Link
              href="https://vercel.com/signup"
              textDecoration={"underline"}
              fontWeight="semibold"
              textDecorationThickness= {"1px"}
            textUnderlineOffset= {"6px"}
            px={"4px"}
            >
              create a new project
            </Link>
            .   
          </ListItem>
          <ListItem>
            The Vercel CLI installed. If you don't have it, you can install it
            using the following command:
          </ListItem>
        </UnorderedList>
      </Box>

      <VStack spacing={6} align="stretch">
        {/* Step 1 */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            1. Install the Vercel Analytics package
          </Heading>
          <Code
            p={2}
            display="block"
            whiteSpace="pre"
            bg="gray.100"
            borderRadius="md"
          >
            npm install @vercel/analytics
          </Code>
        </Box>

        {/* Step 2 */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            2. Import and add the Analytics component
          </Heading>
          <Text mb={2}>Add this to your root layout:</Text>
          <Code
            p={2}
            display="block"
            whiteSpace="pre"
            bg="gray.100"
            borderRadius="md"
          >
            {`import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`}
          </Code>
        </Box>

        {/* Step 3 */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            3. Deploy your project
          </Heading>
          <Text mb={4}>
            Push your changes to your Git repository and deploy your project to
            Vercel.
          </Text>
          <Button colorScheme="blue" size="sm">
            Deploy Now
          </Button>
        </Box>

        {/* Documentation Link */}
        <Box mt={8}>
          <Text>
            For more details, check out the{" "}
            <Link href="https://vercel.com/docs/analytics" color="blue.500">
              full Analytics documentation
            </Link>
            .
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
