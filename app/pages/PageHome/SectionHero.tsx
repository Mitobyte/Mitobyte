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
  const flexD = useBreakpointValue({
    base: "column-reverse",
    lg: "row",
  });
  const pT = useBreakpointValue({
    md: "0",
    lg: "64px",
  });
  const justify = useBreakpointValue({
    md: "flex-start",
    lg: "space-between",
  });

  return (
    <Box
      as="section"
      w="100%"
      display="flex"
      justifyContent="center"
      pt={pT}
      pb="64px"
      borderBottom="1px solid"
      borderColor="syntaxBlack.300"
    >
      <Flex
        alignSelf="stretch"
        flexDirection={flexD}
        justifyContent="space-between"
        alignItems="flex-start"
        w="100%"
        gap="16px"
      >
        <Flex
          flex="1 1 0"
          alignSelf="stretch"
          pl="16px"
          flexDirection="column"
          justifyContent={justify}
          alignItems="flex-start"
          max-width="892px"
        >
          <Flex
            alignSelf="stretch"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="22px"
            minWidth="620px"
          >
            <VStack
              alignSelf="stretch"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="2px"
            >
              <Heading
                as="h1"
                size="4xl"
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
                fontSize="22px"
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
            height="48px"
            bg="deployOrange.300"
            color="white.300"
            fontSize="20px"
            fontFamily="Satoshi"
            fontWeight="700"
            lineHeight="28px"
            borderRadius="6px"
            display="inline-flex"
            alignItems="center"
            gap="2px"
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
        >
          <Image
            alignSelf="stretch"
            maxHeight="722px"
            minHeight="352px"
            minWidth="610px"
            src="assets/images/events/codeAndCoffee/codeCoffee1.jpg"
            alt="A group of people collaborating at a large table in a modern office space, with laptops and drinks on the table, and a whiteboard in the background."
          />
        </Flex>
      </Flex>
    </Box>
  );
};
