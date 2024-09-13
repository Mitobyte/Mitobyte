import { Box, Heading, Text, VStack, ListItem, List } from "@chakra-ui/react";

export const Privacy = () => {
  return (
    <Box maxW="800px" mx="auto" p={6} my={20}>
      <VStack align="start" spacing={5}>
        {/* Privacy Policy Heading */}
        <Heading as="h1" size="2xl">
          Mitobyte Privacy Policy
        </Heading>
        <Text fontSize="md" color="gray.500">
          Effective Date: 09/10/2024
        </Text>

        {/* Introduction */}
        <Text>
          Mitobyte ("we," "our," or "us") is committed to protecting your
          privacy and ensuring the security of any personal data we collect.
          This Privacy Policy explains how we collect, use, and protect your
          information when you participate in our events, visit our website, or
          engage with our services.
        </Text>

        {/* Section 1: Information We Collect */}
        <Heading as="h2" size="lg">
          1. Information We Collect
        </Heading>
        <Text>
          We may collect the following types of personal information when you
          interact with us:
        </Text>
        <List spacing={3}>
          <ListItem>
            Personal Information: Name, email address, phone number, and contact
            details when you register for events, sign up for newsletters, or
            contact us directly.
          </ListItem>
          <ListItem>
            Payment Information: Billing address, credit card, or other
            financial data for event payments or sponsorship transactions
            (processed securely by third-party payment processors).
          </ListItem>
          <ListItem>
            Event Data: Information related to your participation in events,
            including photos, video recordings, and feedback surveys.
          </ListItem>
          <ListItem>
            Technical Data: IP addresses, browser type, and other technical
            information collected via cookies or similar tracking technologies
            when you visit our website.
          </ListItem>
        </List>

        {/* Section 2: How We Use Your Information */}
        <Heading as="h2" size="lg">
          2. How We Use Your Information
        </Heading>
        <Text>
          We use the information we collect for the following purposes:
        </Text>
        <List spacing={3}>
          <ListItem>
            Event Management: To organize and manage events, including
            registration, communication, and logistics.
          </ListItem>
          <ListItem>
            Communication: To send you information about upcoming events,
            workshops, and important updates.
          </ListItem>
          <ListItem>
            Improvement of Services: To analyze trends, improve our website, and
            enhance user experience.
          </ListItem>
          <ListItem>
            Marketing: To send promotional materials, newsletters, and special
            offers. You can opt-out of marketing communications at any time.
          </ListItem>
          <ListItem>
            Compliance: To comply with legal obligations and prevent fraud or
            misuse of our services.
          </ListItem>
        </List>

        {/* Section 3: How We Share Your Information */}
        <Heading as="h2" size="lg">
          3. How We Share Your Information
        </Heading>
        <Text>
          We do not sell or rent your personal information to third parties. We
          may share your information in the following circumstances:
        </Text>
        <List spacing={3}>
          <ListItem>
            Service Providers: We work with third-party service providers (e.g.,
            event platforms, payment processors) to assist in delivering our
            services. These providers are bound by confidentiality agreements
            and are only permitted to use your information for specified
            purposes.
          </ListItem>
          <ListItem>
            Event Sponsors: With your consent, we may share your contact
            information with event sponsors, especially when you participate in
            sponsored activities.
          </ListItem>
          <ListItem>
            Legal Requirements: We may disclose your information if required by
            law or in response to valid legal requests from public authorities.
          </ListItem>
        </List>

        {/* Section 4: Data Security */}
        <Heading as="h2" size="lg">
          4. Data Security
        </Heading>
        <Text>
          We take data security seriously and implement reasonable
          administrative, technical, and physical safeguards to protect your
          personal information from unauthorized access, alteration, disclosure,
          or destruction. However, no method of transmission over the internet
          or electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </Text>

        {/* Section 5: Cookies and Tracking Technologies */}
        <Heading as="h2" size="lg">
          5. Cookies and Tracking Technologies
        </Heading>
        <Text>
          Our website uses cookies and similar technologies to enhance your
          experience and gather information about your usage. Cookies are small
          files stored on your device that help us analyze website traffic and
          remember your preferences. You can choose to disable cookies through
          your browser settings, but this may affect your ability to use certain
          features of our site.
        </Text>

        {/* Section 6: Your Rights */}
        <Heading as="h2" size="lg">
          6. Your Rights
        </Heading>
        <Text>
          Depending on your location, you may have certain rights regarding your
          personal data, such as:
        </Text>
        <List spacing={3}>
          <ListItem>
            Access: You can request access to the personal information we hold
            about you.
          </ListItem>
          <ListItem>
            Correction: You can ask us to update or correct your personal data
            if it's inaccurate.
          </ListItem>
          <ListItem>
            Deletion: You can request that we delete your personal data, subject
            to certain legal obligations.
          </ListItem>
          <ListItem>
            Opt-Out: You may opt out of receiving marketing communications at
            any time by following the unsubscribe instructions in the emails we
            send.
          </ListItem>
        </List>

        {/* Section 7: Data Retention */}
        <Heading as="h2" size="lg">
          7. Data Retention
        </Heading>
        <Text>
          We retain personal data only as long as necessary to fulfill the
          purposes outlined in this policy, unless a longer retention period is
          required or permitted by law. If you wish to request the deletion of
          your data, please contact us.
        </Text>

        {/* Section 8: Third-Party Links */}
        <Heading as="h2" size="lg">
          8. Third-Party Links
        </Heading>
        <Text>
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these third-party
          sites. We encourage you to review the privacy policies of any
          third-party sites you visit.
        </Text>

        {/* Section 9: Updates to this Policy */}
        <Heading as="h2" size="lg">
          9. Updates to this Policy
        </Heading>
        <Text>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          significant changes by posting the updated policy on our website and
          updating the "Effective Date" above.
        </Text>

        {/* Section 10: Contact Us */}
        <Heading as="h2" size="lg">
          10. Contact Us
        </Heading>
        <Text>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </Text>
        <List spacing={3}>
          <ListItem>**Mitobyte**</ListItem>
          <ListItem>allan@mitobyte.com</ListItem>
          <ListItem>joe@mitobyte.com</ListItem>
        </List>

        {/* Consent Section */}
        <Heading as="h2" size="lg">
          Consent
        </Heading>
        <Text>
          By using our website or attending our events, you consent to the
          collection and use of your information as described in this Privacy
          Policy.
        </Text>
      </VStack>
    </Box>
  );
};
