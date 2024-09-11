import { Grid, GridItem, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

interface EventDescriptionProps {
  title: string;
  description: string[];
  imageSlot: React.ReactNode;
}

export const EventDescription = ({ title, description, imageSlot }: EventDescriptionProps) => {

  return (
    <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6} p={{ base: 3, lg: 12 }}>
      <GridItem>
        <Heading mb={3} size="lg">{title}</Heading>
        <UnorderedList>
          {
            description.map((desc) => (
              <ListItem key={desc}>{desc}</ListItem>
            ))
          }
        </UnorderedList>
      </GridItem>
      <GridItem>
        {imageSlot}
      </GridItem>
    </Grid>
  );
};
