import { Grid, GridItem, Heading, List } from "@chakra-ui/react";

interface EventDescriptionProps {
  title: string;
  description: string[];
  imageSlot: React.ReactNode;
}

export const EventDescription = ({
  title,
  description,
  imageSlot,
}: EventDescriptionProps) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
      gap={6}
      p={{ base: 3, lg: 12 }}
    >
      <GridItem>
        <Heading mb={3} size="lg">
          {title}
        </Heading>
        <List.Root as="ul">
          {description.map((desc) => (
            <List.Item key={desc} fontSize="md">
              {desc}
            </List.Item>
          ))}
        </List.Root>
      </GridItem>
      <GridItem>{imageSlot}</GridItem>
    </Grid>
  );
};
