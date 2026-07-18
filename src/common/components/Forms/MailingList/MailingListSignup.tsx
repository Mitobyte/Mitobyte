import React from "react";
import {
  Grid,
  GridItem,
  Input,
  Heading,
  Button,
  InputAddon,
  Group,
  Box,
  Field,
} from "@chakra-ui/react";
import { boxLabelStyles } from "../Forms.styles";
import { LuChevronRight } from "react-icons/lu";

export const MailingListSignup = () => {
  return (
    <>
      <Heading
        size={{ sm: "md", xl: "lg", xxl: "xl" }}
        p="3"
        textAlign="center"
        borderBottom="1px solid"
        borderBottomColor="black"
      >
        Sign up for email notifictions.
      </Heading>
      <form
        action="https://eepurl.us5.list-manage.com/subscribe/post"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <Grid templateColumns={{ base: "1fr" }}>
          <GridItem>
            <input type="hidden" name="u" value="e1e45fd6e057c2ffc679ea161" />
            <input type="hidden" name="id" value="79264db8fd" />

            <Field.Root required>
              <Field.Label {...boxLabelStyles}>First Name</Field.Label>
              <Group attached w="full">
                <InputAddon variant="box">
                  <LuChevronRight />
                </InputAddon>
                <Input
                  name="FNAME"
                  type="text"
                  variant="box"
                  placeholder="enter first name"
                />
              </Group>
            </Field.Root>
          </GridItem>
          <GridItem>
            <Field.Root required>
              <Field.Label {...boxLabelStyles}>Last Name</Field.Label>
              <Group attached w="full">
                <InputAddon variant="box">
                  <LuChevronRight />
                </InputAddon>
                <Input
                  name="LNAME"
                  type="text"
                  variant="box"
                  placeholder="enter last name"
                />
              </Group>
            </Field.Root>
          </GridItem>
          <GridItem>
            <Field.Root>
              <Field.Label {...boxLabelStyles}>Position / Role</Field.Label>
              <Group attached w="full">
                <InputAddon variant="box">
                  <LuChevronRight />
                </InputAddon>
                <Input
                  name="POSITION"
                  type="text"
                  variant="box"
                  placeholder="enter position"
                />
              </Group>
            </Field.Root>
          </GridItem>
          <GridItem>
            <Field.Root required>
              <Box {...boxLabelStyles}>
                <Field.Label>Email address</Field.Label>
                <Field.HelperText>
                  We'll never share your email.
                </Field.HelperText>
              </Box>
              <Group attached w="full">
                <InputAddon variant="box">
                  <LuChevronRight />
                </InputAddon>
                <Input
                  name="EMAIL"
                  type="email"
                  variant="box"
                  placeholder="enter email"
                />
              </Group>
            </Field.Root>
          </GridItem>
          <GridItem mt="4">
            <Button
              type="submit"
              width="full"
              size="lg"
              colorPalette="codeBlue"
              variant="ghost"
            >
              SUBMIT FORM
            </Button>
          </GridItem>
        </Grid>
      </form>
    </>
  );
};
