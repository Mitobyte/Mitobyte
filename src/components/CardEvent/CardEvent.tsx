import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { InfoIcon } from "@chakra-ui/icons";
import NextImage, { StaticImageData } from "next/image";

export interface CardEventProps {
  heading: string;
  description: string;
  imageSrc: StaticImageData;
  linkMeetup?: string;
  linkEventbrite?: string;
  linkText?: string;
  linkTo?: string;
  showLink?: boolean;
}

export const CardEvent = ({
  heading,
  description,
  imageSrc,
  linkMeetup,
  linkEventbrite,
  linkText,
  linkTo,
  showLink = true,
}: CardEventProps) => {
  return (
    <Card maxW="md">
      <CardHeader pb={2}>
        <NextImage
          objectFit="cover"
          src={imageSrc}
          alt="event image"
          width={150}
          height={150}
        />
      </CardHeader>

      <CardBody>{description}</CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        columnGap={1}
        rowGap={1}
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {showLink && (
          <Button
            as={Link}
            flex="1"
            variant="ghost"
            leftIcon={<InfoIcon />}
            href={linkTo ?? ''}
          >
            {linkText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
