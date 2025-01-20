import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  GridItem,
  Input,
  Heading,
  Button,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  Box,
} from "@chakra-ui/react";
import { boxLabelStyles } from "../Forms.styles";
import { ChevronRightIcon } from "@chakra-ui/icons";

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

            <FormControl isRequired>
              <FormLabel {...boxLabelStyles}>First Name</FormLabel>
              <InputGroup variant="box">
                <InputLeftAddon>
                  <ChevronRightIcon />
                </InputLeftAddon>
                <Input
                  name="FNAME"
                  type="text"
                  variant="box"
                  placeholder="enter first name"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel {...boxLabelStyles}>Last Name</FormLabel>
              <InputGroup variant="box">
                <InputLeftAddon>
                  <ChevronRightIcon />
                </InputLeftAddon>
                <Input
                  name="LNAME"
                  type="text"
                  variant="box"
                  placeholder="enter last name"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel {...boxLabelStyles}>Position / Role</FormLabel>
              <InputGroup variant="box">
                <InputLeftAddon>
                  <ChevronRightIcon />
                </InputLeftAddon>
                <Input
                  name="POSITION"
                  type="text"
                  variant="box"
                  placeholder="enter position"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <Box {...boxLabelStyles}>
                <FormLabel>Email address</FormLabel>
                <FormHelperText>We'll never share your email.</FormHelperText>
              </Box>
              <InputGroup variant="box">
                <InputLeftAddon>
                  <ChevronRightIcon />
                </InputLeftAddon>
                <Input
                  name="EMAIL"
                  type="email"
                  variant="box"
                  placeholder="enter email"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem mt="4">
            <Button
              type="submit"
              width="full"
              size="lg"
              colorScheme="codeBlue"
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
