import { Box, Link, useBreakpointValue } from "@chakra-ui/react";
import { LogoLargeMitobyte } from "./LogoLargeMitobyte";

const dotbg = 'white';
const dotcolor = '#999999';
const dotsize = '2px';
const dotspace = '15px';

export const LogoHeaderMitobyte = () => {
  // Use Chakra's responsive values for logo scaling
  const logoPosition = useBreakpointValue({
    base: "0",
    md: "26px",
    lg: "0",
    xl: "0",
  });

  return (
    <Box id="header-logo" background={`linear-gradient(90deg, ${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
    linear-gradient(${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
    ${dotcolor}`}>
      {/* Link for the Large Logo */}
      <Box
        position="relative"
        textAlign="center"
        mb={1}
        height={{
          base: "32vw",
          md: "119px",
          lg: "202px",
          xl: "202px",
        }}
      >
        <Link
          href="/"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
        />
      </Box>

      {/* Large Logo */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform={`translate(-50%,${logoPosition})`}
        zIndex="4"
        pointerEvents="none"
        width={{
          base: "90vw",
          md: "500px",
          lg: "836px",
          xl: "836px",
        }}
      >
        <LogoLargeMitobyte />
      </Box>
    </Box>
  );
};
