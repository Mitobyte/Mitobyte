import {
  Box,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
  Link,
  Badge,
} from "@chakra-ui/react";
import NextImage from "next/image";

export interface CardSimpleWideProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl?: string;
  linkText?: string;
  badge?: string;
  showBadge: boolean;
  showLink: boolean;
  showDescription: boolean;
}

export const CardSimpleWide = ({
  title,
  description,
  imageUrl = "https://via.placeholder.com/150",
  imageAlt,
  linkUrl,
  linkText,
  badge,
  showLink,
  showBadge,
  showDescription,
}: CardSimpleWideProps) => {
  const gridTemplateColumns = showBadge ? "2fr 4fr 1fr" : "1fr 3fr";

  return (
    <Grid gap={2} gridTemplateColumns={gridTemplateColumns}>
      <GridItem>
        <Image as={NextImage} src={imageUrl} alt={imageAlt} width={150} />
      </GridItem>
      <GridItem>
        <Heading textAlign="center" fontSize="lg">
          {title}
        </Heading>
        {showDescription && <Text>{description}</Text>}
        {showLink && linkUrl && <Link href={linkUrl ?? ""}>{linkText}</Link>}
      </GridItem>
      {showBadge && (
        <GridItem>
          <Badge>{badge}</Badge>
        </GridItem>
      )}
    </Grid>
  );
};
