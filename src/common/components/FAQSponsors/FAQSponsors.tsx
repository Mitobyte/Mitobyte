import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Grid, GridItem, Heading } from "@chakra-ui/react";

const FAQ = [
  {
    title: 'How do I become a sponsor?',
    content: 'To become a sponsor, please contact us at joe@mitobyte.com or visit our sponsorship page on the Mitobyte website for more details and packages.',
  },
  {
    title: 'How many people attend typically?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'How will the brand be promoted?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Are there additional costs?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'What are the differences in sponsor packages?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
]

export const FAQSponsors = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
      <GridItem>
        <Heading as="h2" size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>Sponsor FAQ</Heading>
      </GridItem>
      <GridItem>
        <Accordion>
          {FAQ.map((faq) => (
            <AccordionItem key={faq.title}>
              <Heading as="h6">
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                {faq.content}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </GridItem>
    </Grid>
  );
};
