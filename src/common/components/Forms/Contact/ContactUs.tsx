import React, { useState, SyntheticEvent } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
  Box,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { boxLabelStyles } from "../Forms.styles";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const ContactUs = () => {
  const [buttonText, setButtonText] = useState("SUBMIT FORM");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContent("");
    setButtonText("Submit");
  };

  // Handle form submission
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          message: content,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setButtonText("Sent");
        resetFields();
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="mc-embedded-contact-us-form"
        name="mc-embedded-contact-us-form"
      >
        <Grid templateColumns={{ base: "1fr" }} maxWidth="lg" margin="0 auto">
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
                  value={firstName}
                  variant="box"
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  variant="box"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="enter last name"
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
                  value={email}
                  variant="box"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter email"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel {...boxLabelStyles}>Message</FormLabel>
              <InputGroup variant="box">
                <InputLeftAddon>
                  <ChevronRightIcon />
                </InputLeftAddon>
                <Textarea
                  name="CONTENT"
                  value={content}
                  variant="box"
                  placeholder="enter message here"
                  onChange={(e) => setContent(e.target.value)}
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
              {buttonText}
            </Button>
          </GridItem>
        </Grid>
      </form>
    </>
  );
};
