import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  GridItem,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";

export const MailingListSignup = () => {
  return (
    <>
      <Heading mb={12} size={{ sm: "sm", xl: "md", xxl: "lg" }}>
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
          <GridItem mb="4">
            <input type="hidden" name="u" value="e1e45fd6e057c2ffc679ea161" />
            <input type="hidden" name="id" value="79264db8fd" />

            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input name="FNAME" type="text" />
            </FormControl>
          </GridItem>
          <GridItem mb="4">
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input name="LNAME" type="text" />
            </FormControl>
          </GridItem>
          <GridItem mb="4">
            <FormControl>
              <FormLabel>Position / Role</FormLabel>
              <Input name="POSITION" type="text" />
            </FormControl>
          </GridItem>
          <GridItem nb="4">
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="EMAIL" type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </GridItem>
          <GridItem mt="8">
            <Button type="submit" width="full" size="lg" colorScheme="codeBlue">
              Submit
            </Button>
          </GridItem>
        </Grid>
      </form>
    </>
  );
};
