import { Box, Flex, Link, chakra, Image } from "@chakra-ui/react";

interface CardPersonProps {
  imageSrc: string;
  name: string;
  role: string;
}

export const CardPerson = ({ imageSrc, name, role }: CardPersonProps) => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image w="full" h={56} fit="cover" src={imageSrc} alt="avatar" />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            {name}
          </Link>
          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
            {role}
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
};
