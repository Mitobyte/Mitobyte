'use client';

import { Box, keyframes } from "@chakra-ui/react";
import NextImage from 'next/image';


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

const logoloop = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
`;

const InnerCarousel = () => {
  return (
    <>
      <Box
        animation={`${logoloop} 90s linear infinite`}
        flexFlow="row"
        flex="none"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        {sponsors.map((sponsor) => (
          <Box
            as={NextImage}
            flexBasis={sponsor.width}
            height={sponsor.height}
            marginLeft="2rem"
            marginRight="2rem"
            display="inline-block"
            width={sponsor.width}
            alt="sponsor"
            objectFit="contain"
            src={sponsor.logo}
          />
        ))}
      </Box>
      <Box
        zIndex="1"
        pointerEvents="none"
        backgroundImage="linear-gradient(270deg, #fff 1%, #21212100 10%, #2220 90%, #fff 99%)"
        width="100%"
        height="100%"
        marginLeft="auto"
        marginRight="auto"
        position="absolute"
      />
    </>
  );
};

export const SponsorCarousel = () => {

  return (
    <Box
      gridColumnGap="2rem"
      gridRowGap="2rem"
      textAlign="center"
      flexFlow="column"
      justifyContent="spaceBetween"
      alignItems="center"
      width="100%"
      display="flex"
      overflow="hidden"
    >
      <Box
        textAlign="center"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
        maxWidth="100vw"
        marginLeft="auto"
        marginRight="auto"
        display="flex"
        position="relative"
        overflow="clip"
      >
        <InnerCarousel />
        <InnerCarousel />
    </Box>
  </Box>
  )
};
