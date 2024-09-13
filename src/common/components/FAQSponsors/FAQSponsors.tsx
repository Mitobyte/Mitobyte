import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";

const FAQ = [
  {
    title: "Why should I sponsor Mitobyte’s events?",
    content:
      "Sponsoring Mitobyte’s events connects your brand with a vibrant and growing community of software engineers, tech enthusiasts, and entrepreneurs. Our events are designed to inspire innovation, foster collaboration, and provide valuable learning opportunities. By sponsoring us, you gain direct access to talented engineers and the chance to be part of shaping the future of technology in our city.",
  },
  {
    title: "What types of events does Mitobyte organize?",
    content:
      "We host monthly networking events (morning and evening), quarterly resume workshops, and biannual hackathons. These events attract passionate engineers and job seekers who are eager to network, learn, and showcase their skills. Whether it's through collaborative hacking or job preparation, our community is focused on creating real-world solutions and career growth.",
  },
  {
    title: "How does sponsorship benefit my company?",
    content:
      "Sponsorship provides a unique platform to showcase your brand, recruit talent, and gain exposure to a community of engaged and skilled software engineers. Depending on your sponsorship tier, you can benefit from logo placements, speaking opportunities, branded challenges, product demos, and more. It’s an ideal way to position your company as a leader in tech innovation and community building.",
  },
  {
    title: "Can sponsoring help with recruitment efforts?",
    content:
      "Absolutely! Our events attract a wide range of engineers, from students to senior-level professionals. Sponsoring gives your company visibility to this talent pool, and depending on the tier, you could even participate in resume workshops, hackathon judging, and direct interactions with attendees. It’s a great way to find and engage top talent.",
  },
  {
    title: "What’s the expected attendance at Mitobyte events?",
    content:
      "Our events generally draw between 30 to 50 participants per event, with our hackathons expected to attract up to 80 or more participants. These attendees are motivated software engineers who are passionate about building, learning, and contributing to the tech community.",
  },
  {
    title:
      "How does sponsoring Mitobyte align with corporate social responsibility (CSR) goals?",
    content:
      "Sponsoring Mitobyte supports a local, community-focused initiative that empowers engineers and promotes education, entrepreneurship, and innovation. Your company will be contributing to the professional development of individuals, fostering a spirit of collaboration, and helping to shape the future tech ecosystem. It’s a meaningful way to give back while enhancing your brand’s reputation.",
  },
  {
    title: "Can I customize my sponsorship package?",
    content:
      "Yes! We offer flexibility in our sponsorship packages to meet your company's unique goals. Whether you want more direct involvement in events or specific branding opportunities, we can work with you to create a package that fits your needs. Contact us to discuss how we can tailor a sponsorship that works best for you.",
  },
  {
    title: "How do I get started with sponsoring Mitobyte?",
    content:
      "Getting started is easy! Simply reach out to us through our contact form, and we’ll set up a time to discuss the sponsorship opportunities available. We look forward to partnering with you to make a meaningful impact on the tech community.",
  },
];

export const FAQSponsors = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
      <GridItem>
        <Heading as="h2" size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>
          Sponsor FAQ
        </Heading>
      </GridItem>
      <GridItem>
        <Accordion>
          {FAQ.map((faq) => (
            <AccordionItem key={faq.title}>
              <Heading as="h6">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>{faq.content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </GridItem>
    </Grid>
  );
};
