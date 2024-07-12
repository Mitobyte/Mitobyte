import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const SectionHero: FC = () => {
  return (
    <Box
      as="section"
      w="100%"
      display="flex"
      justifyContent="center"
      pt={{ sm: "0", md: "64px" }}
      pb="64px"
      borderBottom="1px solid"
      borderColor="syntaxBlack.300"
    >
      <Flex
        alignSelf="stretch"
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        w="100%"
        gap={10}
        maxWidth="1390px"
      >
        <Flex
          flex="1 1 0"
          alignSelf="stretch"
          pl="16px"
          pr={{ base: "16px", sm: "0" }}
          flexDirection="column"
          justifyContent={{ sm: "flex-start", md: "space-between" }}
          alignItems="flex-start"
          max-width="892px"
          gap={8}
        >
          <Flex
            alignSelf="stretch"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="22px"
          >
            <VStack
              alignSelf="stretch"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="2px"
            >
              <Heading
                as="h1"
                size={{ sm: "xl", xl: "2xl", xxl: "4xl" }}
                color="syntaxBlack.300"
                fontFamily="Satoshi"
                fontWeight="700"
              >
                Build Together
              </Heading>
            </VStack>
            <VStack
              alignSelf="stretch"
              h="82px"
              pb="24px"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="16px"
            >
              <Text
                fontSize={{ md: "lg", lg: "xl" }}
                color="syntaxBlack.300"
                fontFamily="Satoshi"
                fontWeight="500"
                lineHeight="29.26px"
              >
                Join Our Events, Connect with Innovators, and Drive Growth
              </Text>
            </VStack>
          </Flex>
          <Button
            as="a"
            href="/events"
            px="24px"
            py="12px"
            height={{ base: "auto", sm: "48px" }}
            bg="deployOrange.300"
            color="white.300"
            fontSize="lg"
            fontFamily="Satoshi"
            fontWeight="700"
            lineHeight="28px"
            borderRadius="6px"
            display="inline-flex"
            flexWrap={{ base: "wrap", sm: "nowrap" }}
            alignItems="center"
            whiteSpace={{ base: "normal", sm: "nowrap" }}
            gap="2px"
            width={{ base: "100%", sm: "auto" }}
            _hover={{ bg: "deployOrange.400" }}
            _active={{ bg: "deployOrange.700" }}
          >
            View events and register
            <ChevronRightIcon style={{ marginLeft: "8px" }} />
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="none"
        >
          <Image
            alignSelf="stretch"
            height="100%"
            maxHeight="422px"
            objectFit="contain"
            src="assets/images/events/codeAndCoffee/codeCoffee1.jpg"
            alt="A group of people collaborating at a large table in a modern office space, with laptops and drinks on the table, and a whiteboard in the background."
          />
        </Flex>
      </Flex>
    </Box>
  );
};
