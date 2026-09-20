"use client";

import React, { useRef, useState, SyntheticEvent } from "react";
import Script from "next/script";
import {
  Box,
  Button,
  Field,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

// Mirrors the server-side limits in src/app/api/send-email/route.ts
// (name there is first + last + space, so 60 + 60 + 1 <= 130).
const LIMITS = { firstName: 60, lastName: 60, email: 254, message: 5000 };

// Public site key for the "mitobyte-contact" widget (Cloudflare dashboard,
// Turnstile). A site key only identifies the widget, so it is safe in client
// code. NEXT_PUBLIC_TURNSTILE_SITE_KEY at build time overrides it (for a
// different widget); an empty value can't disable it, remove the default to
// do that. The server only enforces verification once TURNSTILE_SECRET is set.
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAE9fTTBNzm56kWp1";
// Must match TURNSTILE_ACTION in route.ts.
const TURNSTILE_ACTION = "contact";

type TurnstileWidgetId = string;
type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "flexible" | "compact";
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => TurnstileWidgetId;
  reset: (widgetId: TurnstileWidgetId) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type Status = "idle" | "sending" | "sent" | "error";

export const ContactUs = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  // Tokens are single-use: keep this widget's ID so it can be reset after
  // every submit attempt, successful or not.
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<TurnstileWidgetId | null>(null);

  const renderTurnstile = () => {
    if (
      !TURNSTILE_SITE_KEY ||
      !turnstileContainer.current ||
      turnstileWidgetId.current !== null ||
      !window.turnstile
    ) {
      return;
    }
    turnstileWidgetId.current = window.turnstile.render(
      turnstileContainer.current,
      {
        sitekey: TURNSTILE_SITE_KEY,
        action: TURNSTILE_ACTION,
        // The site is light-only; "auto" would follow the visitor's OS theme.
        theme: "light",
        // Fill the form's width instead of the fixed 300px card.
        size: "flexible",
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      },
    );
  };

  const resetTurnstile = () => {
    if (turnstileWidgetId.current !== null) {
      window.turnstile?.reset(turnstileWidgetId.current);
    }
    setTurnstileToken("");
  };

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContent("");
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          message: content,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setSentTo(email);
        setStatus("sent");
        resetFields();
        return;
      }

      const body = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;
      setErrorMessage(
        body?.message ?? "Something went wrong. Please try again.",
      );
      setStatus("error");
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
      setStatus("error");
    } finally {
      resetTurnstile();
    }
  };

  if (status === "sent") {
    return (
      <Box
        role="status"
        borderLeft="4px solid"
        borderLeftColor="codeBlue.300"
        pl={4}
        py={2}
      >
        <Text fontWeight="700" color="syntaxBlack.300">
          Message sent.
        </Text>
        <Text color="syntaxBlack.300">We'll reply to {sentTo}.</Text>
      </Box>
    );
  }

  const waitingOnTurnstile = Boolean(TURNSTILE_SITE_KEY) && !turnstileToken;

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={renderTurnstile}
        />
      )}
      <form onSubmit={handleSubmit} id="contact-form" name="contact-form">
        <Stack gap={5}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
            <GridItem>
              <Field.Root required>
                <Field.Label color="syntaxBlack.300" fontWeight="600">
                  First name
                </Field.Label>
                <Input
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  variant="frame"
                  h={12}
                  value={firstName}
                  maxLength={LIMITS.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Field.Root>
            </GridItem>
            <GridItem>
              <Field.Root required>
                <Field.Label color="syntaxBlack.300" fontWeight="600">
                  Last name
                </Field.Label>
                <Input
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  variant="frame"
                  h={12}
                  value={lastName}
                  maxLength={LIMITS.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Field.Root>
            </GridItem>
          </Grid>

          <Field.Root required>
            <Field.Label color="syntaxBlack.300" fontWeight="600">
              Email address
            </Field.Label>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              variant="frame"
              h={12}
              placeholder="you@example.com"
              value={email}
              maxLength={LIMITS.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Field.HelperText>We'll never share your email.</Field.HelperText>
          </Field.Root>

          <Field.Root required>
            <Field.Label color="syntaxBlack.300" fontWeight="600">
              Message
            </Field.Label>
            <Textarea
              name="message"
              variant="frame"
              minH="40"
              value={content}
              maxLength={LIMITS.message}
              onChange={(e) => setContent(e.target.value)}
            />
          </Field.Root>

          {TURNSTILE_SITE_KEY && <div ref={turnstileContainer} />}

          {status === "error" && (
            <Box role="alert" color="fg.error" fontWeight="600">
              {errorMessage}
            </Box>
          )}

          <Button
            type="submit"
            h={12}
            width="full"
            colorPalette="codeBlue"
            disabled={status === "sending" || waitingOnTurnstile}
          >
            {status === "sending" ? "Sending" : "Send message"}
          </Button>
        </Stack>
      </form>
    </>
  );
};
