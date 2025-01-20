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
} from "@chakra-ui/react";

export const ContactUs = () => {
  const [buttonText, setButtonText] = useState("Submit");
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
        <Grid templateColumns={{ base: "1fr" }} maxWidth="md" margin="0 auto">
          <GridItem>
            <input type="hidden" name="u" value="e1e45fd6e057c2ffc679ea161" />
            <input type="hidden" name="id" value="79264db8fd" />

            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                name="FNAME"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="LNAME"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="EMAIL"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="CONTENT"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem style={{ paddingTop: 10 }}>
            <Button type="submit" width="full" size="lg" colorScheme="codeBlue">
              {buttonText}
            </Button>
          </GridItem>
        </Grid>
      </form>
    </>
  );
};
