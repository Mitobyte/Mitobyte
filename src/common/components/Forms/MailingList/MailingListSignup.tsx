"use client";

import React, { useState, SyntheticEvent } from "react";
import {
  Box,
  Button,
  Field,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

// Mirrors EMAIL_MAX in src/app/api/subscribe/route.ts.
const EMAIL_MAX = 254;

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Mailing-list signup: one email field, submits to /api/subscribe, and shows
 * the result in place. Designed to sit on a tinted band, so it uses a plain
 * label and a fully bordered input rather than the site's tab-and-underline
 * "box" pattern, which relies on the white page behind it.
 */
export const MailingListSignup = () => {
  const [email, setEmail] = useState("");
  // Honeypot value. Never rendered visibly; see the hidden field below.
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const body = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (response.ok) {
        setStatus("sent");
        setMessage(body?.message ?? "You're on the list.");
        setEmail("");
        return;
      }
      setStatus("error");
      setMessage(body?.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "3fr 2fr" }}
      gap={{ base: 8, lg: 16 }}
      alignItems="center"
    >
      <GridItem>
        <Heading
          as="h2"
          size={{ sm: "xl", xl: "2xl" }}
          color="syntaxBlack.300"
          fontWeight="700"
          css={{ textWrap: "balance" }}
        >
          Get event announcements in your inbox.
        </Heading>
        <Text
          mt={3}
          fontSize={{ md: "lg" }}
          color="syntaxBlack.300"
          maxW="60ch"
          css={{ textWrap: "pretty" }}
        >
          One email per new event. Unsubscribe any time.
        </Text>
      </GridItem>

      <GridItem>
        {status === "sent" ? (
          <Box
            role="status"
            borderLeft="4px solid"
            borderLeftColor="codeBlue.300"
            pl={4}
            py={2}
          >
            <Text fontWeight="700" color="syntaxBlack.300">
              {message}
            </Text>
          </Box>
        ) : (
          <form
            onSubmit={handleSubmit}
            id="mailing-list-signup"
            name="mailing-list-signup"
          >
            <Box position="absolute" left="-9999px" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </label>
            </Box>

            <Field.Root
              required
              invalid={status === "error"}
              colorPalette="codeBlue"
            >
              <Field.Label color="syntaxBlack.300" fontWeight="600">
                Email address
              </Field.Label>
              <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} w="full">
                <Input
                  name="EMAIL"
                  type="email"
                  variant="frame"
                  h={12}
                  maxLength={EMAIL_MAX}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  h={12}
                  px={8}
                  colorPalette="codeBlue"
                  mt={{ base: 3, md: 0 }}
                  // At desktop the button shares the input's hairline frame:
                  // same border on three sides, square corners, no double
                  // line where they meet. On phones it stands alone.
                  border={{ md: "1px solid" }}
                  borderLeft={{ md: "0" }}
                  borderColor="black"
                  rounded={{ md: "0" }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Adding you" : "Join the list"}
                </Button>
              </Grid>
              <Field.HelperText>We'll never share your email.</Field.HelperText>
              <Field.ErrorText>{message}</Field.ErrorText>
            </Field.Root>
          </form>
        )}
      </GridItem>
    </Grid>
  );
};
