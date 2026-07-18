import {
  Link,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";

interface CardAboutUsProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkLinkedIn: string;
  linkGithub: string;
}

export const CardAboutUs = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkLinkedIn,
  linkGithub,
}: CardAboutUsProps) => {
  return (
    <Card.Root maxW="xs">
      <Card.Body>
        <Image src={imageSrc} alt={imageAlt} borderRadius="lg" width="150px" />
        <Stack mt="6" gap="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup gap="2">
          <Link href={linkGithub ?? ""}>Github</Link>
          <Link href={linkLinkedIn ?? ""}>LinkedIn</Link>
        </ButtonGroup>
      </Card.Footer>
    </Card.Root>
  );
};
