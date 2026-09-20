import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";
import { Wrapper } from "@/common/components/Wrapper/Wrapper";
import { ContactUs } from "@/common/components/Forms/Contact/ContactUs";
import { ROUTES } from "@/config/routes";

const CHANNELS = [
  { label: "contact@mitobyte.com", href: "mailto:contact@mitobyte.com" },
  { label: "Discord", href: ROUTES.EXTERNAL.DISCORD },
  { label: "Meetup", href: ROUTES.EXTERNAL.MEETUP },
];

export const Contact = () => {
  return (
    <Wrapper maxWidth="7xl" paddingTop={20} paddingBottom={24}>
      <Grid
        templateColumns={{ base: "1fr", lg: "2fr 3fr" }}
        gap={{ base: 10, lg: 20 }}
        alignItems="start"
      >
        <GridItem>
          <Heading
            as="h1"
            size={{ sm: "2xl", xl: "3xl" }}
            color="syntaxBlack.300"
            fontWeight="700"
            css={{ textWrap: "balance" }}
          >
            Contact Us
          </Heading>
          <Text
            mt={4}
            fontSize={{ md: "lg" }}
            color="syntaxBlack.300"
            maxW="45ch"
            css={{ textWrap: "pretty" }}
          >
            Questions about an event, sponsoring, speaking, or hosting? Send a
            note and an organizer will reply.
          </Text>
          <Stack mt={8} gap={3} alignItems="flex-start">
            {CHANNELS.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <Link
                  key={channel.href}
                  href={channel.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  fontWeight="600"
                  color="syntaxBlack.300"
                  display="inline-flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ color: "codeBlue.300" }}
                >
                  {channel.label}
                  <Icon boxSize={4}>
                    <LuArrowUpRight />
                  </Icon>
                </Link>
              );
            })}
          </Stack>
        </GridItem>
        <GridItem>
          <ContactUs />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
