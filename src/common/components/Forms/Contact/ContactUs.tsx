"use client";

import React, { useRef, useState, SyntheticEvent } from "react";
import Script from "next/script";
import {
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
  Box,
  InputAddon,
  Group,
  Field,
} from "@chakra-ui/react";
import { boxLabelStyles } from "../Forms.styles";
import { LuChevronRight } from "react-icons/lu";

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

const BUTTON_TEXT: Record<Status, string> = {
  idle: "SUBMIT FORM",
  sending: "Sending...",
  sent: "Sent",
  error: "Try again",
};

export const ContactUs = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          message: content,
          turnstileToken,
        }),
      });

      if (response.ok) {
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
      <form
        onSubmit={handleSubmit}
        id="mc-embedded-contact-us-form"
        name="mc-embedded-contact-us-form"
      >
        <Grid templateColumns={{ base: "1fr" }} maxWidth="lg" margin="0 auto">
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
                  value={firstName}
                  variant="box"
                  maxLength={LIMITS.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  variant="box"
                  maxLength={LIMITS.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="enter last name"
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
                  value={email}
                  variant="box"
                  maxLength={LIMITS.email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter email"
                />
              </Group>
            </Field.Root>
          </GridItem>
          <GridItem>
            <Field.Root required>
              <Field.Label {...boxLabelStyles}>Message</Field.Label>
              <Group attached w="full">
                <InputAddon variant="box">
                  <LuChevronRight />
                </InputAddon>
                <Textarea
                  name="CONTENT"
                  value={content}
                  variant="box"
                  maxLength={LIMITS.message}
                  placeholder="enter message here"
                  onChange={(e) => setContent(e.target.value)}
                />
              </Group>
            </Field.Root>
          </GridItem>
          {TURNSTILE_SITE_KEY && (
            <GridItem mt="4">
              <div ref={turnstileContainer} />
            </GridItem>
          )}
          {status === "error" && (
            <GridItem mt="2">
              <Box role="alert" color="fg.error">
                {errorMessage}
              </Box>
            </GridItem>
          )}
          <GridItem mt="4">
            <Button
              type="submit"
              width="full"
              size="lg"
              colorPalette="codeBlue"
              variant="ghost"
              disabled={status === "sending" || waitingOnTurnstile}
            >
              {BUTTON_TEXT[status]}
            </Button>
          </GridItem>
        </Grid>
      </form>
    </>
  );
};
