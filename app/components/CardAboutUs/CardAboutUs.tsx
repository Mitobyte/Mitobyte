import {
  Link,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";

interface CardAboutUsProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkLinkedIn: string;
  linkGithub: string;
}

export const CardAboutUs: FC<CardAboutUsProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkLinkedIn,
  linkGithub,
}) => {
  return (
    <Card maxW="xs">
      <CardBody>
        <Image src={imageSrc} alt={imageAlt} borderRadius="lg" />
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
