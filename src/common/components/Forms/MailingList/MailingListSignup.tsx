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
} from "@chakra-ui/react";
import { boxLabelStyles } from "../Forms.styles";

export const MailingListSignup = () => {
  return (
    <>
      <Heading
        mb={12}
        size={{ sm: "sm", xl: "md", xxl: "lg" }}
        textAlign="center"
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
              <Input
                name="FNAME"
                type="text"
                variant="box"
                placeholder="first name"
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel {...boxLabelStyles}>Last Name</FormLabel>
              <Input
                name="LNAME"
                type="text"
                variant="box"
                placeholder="last name"
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel {...boxLabelStyles}>Position / Role</FormLabel>
              <Input
                name="POSITION"
                type="text"
                variant="box"
                placeholder="position"
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel {...boxLabelStyles}>Email address</FormLabel>
              <Input
                name="EMAIL"
                type="email"
                variant="box"
                placeholder="email"
              />
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
