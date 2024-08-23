import {
  Link,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import NextImage from "next/image";

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
    <Card maxW="xs">
      <CardBody>
        <Image as={NextImage} src={imageSrc} alt={imageAlt} borderRadius="lg" width={150} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={linkGithub}>Github</Link>
          <Link href={linkLinkedIn}>LinkedIn</Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
