import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { ContactUs } from "@/common/components/Forms/Contact/ContactUs";

export const Contact = () => {
  return (
    <Box maxW="800px" mx="auto" p={6} my={20}>
      <Heading as="h1" size="xl" mb={4}>
        Contact Us
      </Heading>
      <ContactUs />
    </Box>
  );
};
