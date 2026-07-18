import { Button, Card, Link } from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";
import { LuInfo } from "react-icons/lu";

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
    <Card.Root maxW="md">
      <Card.Header pb={2}>
        <NextImage
          objectFit="cover"
          src={imageSrc}
          alt="event image"
          width={150}
          height={150}
        />
      </Card.Header>
      <Card.Body>{description}</Card.Body>
      <Card.Footer
        justifyContent="space-between"
        flexWrap="wrap"
        columnGap={1}
        rowGap={1}
        css={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {showLink && (
          <Button flex="1" variant="ghost" asChild>
            <Link href={linkTo ?? ""}>
              <LuInfo />
              {linkText}
            </Link>
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  );
};
