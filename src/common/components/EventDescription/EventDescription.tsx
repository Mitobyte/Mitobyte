import { Grid, GridItem, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

interface EventDescriptionProps {
  title: string;
  description: string[];
  imageSlot: React.ReactNode;
}

export const EventDescription = ({ title, description, imageSlot }: EventDescriptionProps) => {

  return (
    <Grid templateColumns={{ base: "2fr 1fr" }} gap={6} p={12}>
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
