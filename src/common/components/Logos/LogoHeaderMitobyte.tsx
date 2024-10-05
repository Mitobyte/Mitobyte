import { Box, Flex, keyframes } from "@chakra-ui/react";
import NextImage from "next/image";

import logo from "@/common/assets/logos-mitobyte/mb-lg.svg";

const dotbg = "white";
const dotcolor = "#999999";
const dotsize = "2px";
const dotspace = "15px";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

interface LogoHeaderMitobyteProps {
  animateIn?: boolean;
}

export const LogoHeaderMitobyte = ({ animateIn }: LogoHeaderMitobyteProps) => {
  const animationProps = animateIn
    ? {
        animation: `${slideInFromLeft} .45s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }
    : {};

  return (
    <Box
      background={`linear-gradient(90deg, ${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      linear-gradient(${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      ${dotcolor}`}
      pointerEvents="none"
      zIndex={3}
    >
      <Flex
        mx="auto"
        justifyContent="center"
        mb={{ base: "-28px", lg: "-65px" }}
        pt="67px"
        maxWidth={{ base: "350px", lg: "800px" }}
      >
        <Box
          as="div"
          {...animationProps}
          position="relative"
          zIndex="3"
          pointerEvents="none"
        >
          <NextImage
            alt="Mitobyte logo"
            src={logo}
            height={274}
            width={836}
            style={{ zIndex: 3, pointerEvents: "none" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
