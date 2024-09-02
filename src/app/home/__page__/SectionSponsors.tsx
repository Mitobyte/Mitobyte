import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import NextImage from 'next/image';
// https://github.com/Splidejs/splide/issues/1248
// @ts-ignore this won't be fixed until splide merges a pr see above ^^
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

import logoCaredirect from "@/common/assets/logos-sponsors/logo-caredirect.png";
import logoCodeworks from "@/common/assets/logos-sponsors/logo-codeworks.jpg";
import logoExpansive from "@/common/assets/logos-sponsors/logo-expansive.png";
import logoIndeed from "@/common/assets/logos-sponsors/logo-indeed.png";
import logoExplorium from "@/common/assets/logos-sponsors/logo-explorium.png";
import logoNewResources from "@/common/assets/logos-sponsors/logo-new-resources.png";
import logoSkygen from "@/common/assets/logos-sponsors/logo-skygen.jpg";
import logoWickidCool from "@/common/assets/logos-sponsors/logo-wickid-cool.png";
import logoFormLabs from "@/common/assets/logos-sponsors/logo-form-labs.jpg";
import logoRoofMarketplace from "@/common/assets/logos-sponsors/logo-roof-marketplace.png";
import logoPkware from "@/common/assets/logos-sponsors/logo-pkware.png";
import logoMistura from "@/common/assets/logos-sponsors/logo-mistura.png";
import logoNvisia from "@/common/assets/logos-sponsors/logo-nvisia.png";
import logoNorthernGround from "@/common/assets/logos-sponsors/logo-northern-ground.png";

const sponsors = [
  { name: "CareDirect", logo: logoCaredirect, height: 100, width: 200 },
  { name: "Codeworks", logo: logoCodeworks, height: 100, width: 200 },
  { name: "Expansive", logo: logoExpansive, height: 100, width: 200 },
  { name: "Indeed", logo: logoIndeed, height: 100, width: 100 },
  { name: "Explorium", logo: logoExplorium, height: 100, width: 100 },
  { name: "New Resources", logo: logoNewResources, height: 100, width: 200 },
  { name: "Skygen", logo: logoSkygen, height: 100, width: 200 },
  // { name: "Vba", logo: logoVba, height: 75, width: 75 },
  { name: "Wickid Cool", logo: logoWickidCool, height: 100, width: 200 },
  { name: "Form Labs", logo: logoFormLabs, height: 100, width: 200 },
  { name: "Roof Marketplace", logo: logoRoofMarketplace, height: 100, width: 200 },
  { name: "PKWARE", logo: logoPkware, height: 100, width: 200 },
  { name: "Mistura", logo: logoMistura, height: 100, width: 200 },
  { name: "Nvisia", logo: logoNvisia, height: 100, width: 125 },
  { name: "Northern Ground", logo: logoNorthernGround, height: 100, width: 200 },
];

export interface SectionSponsorsProps extends Omit<WrapperProps, "children"> {}

export const SectionSponsors = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionSponsorsProps) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: 'loop',
          perPage: 6,
          arrows: false,
          autoplay: 1000,
          flickPower: 100,
          pagination: false,
        }}
      >
        {sponsors.map((sponsor) => (
          <Box as={SplideSlide} alignSelf="center">
            <NextImage
              width={sponsor.width}
              height={sponsor.height}
              alt="sponsor"
              key={sponsor.name}
              src={sponsor.logo}
            />
          </Box>
        ))}
      </Splide>
    </Wrapper>
  );
};
