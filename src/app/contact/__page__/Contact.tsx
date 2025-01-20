import { Box, Heading } from "@chakra-ui/react";
import { ContactUs } from "@/common/components/Forms/Contact/ContactUs";

export const Contact = () => {
  return (
    <Box maxW="xl" mx="auto" p={6} my={20}>
      <Heading
        as="h1"
        size={{ sm: "md", xl: "lg", xxl: "xl" }}
        p="3"
        textAlign="center"
        borderBottom="1px solid"
        borderBottomColor="black"
      >
        Contact Us
      </Heading>
      <ContactUs />
    </Box>
  );
};
