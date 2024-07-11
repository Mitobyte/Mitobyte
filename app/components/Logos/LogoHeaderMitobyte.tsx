import { Box, Link, useBreakpointValue } from "@chakra-ui/react";
import { LogoLargeMitobyte } from "../Logos/LogoLargeMitobyte";

export const LogoHeaderMitobyte = () => {
  // Use Chakra's responsive values for logo scaling
  const logoWidth = useBreakpointValue({
    base: "90vw",
    sm: "320px",
    md: "500px",
    lg: "836px",
    xl: "836px",
  });
  const logoPosition = useBreakpointValue({
    base: "0",
    sm: "21px",
    md: "26px",
    lg: "0",
    xl: "0",
  });
  const containerHeight = useBreakpointValue({
    base: "32vw",
    sm: "96px",
    md: "146px",
    lg: "202px",
    xl: "202px",
  });

  return (
    <Box id="header-logo">
      {/* Link for the Large Logo */}
      <Box
        position="relative"
        textAlign="center"
        mb={1}
        height={containerHeight}
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
        width={logoWidth}
      >
        <LogoLargeMitobyte />
      </Box>
    </Box>
  );
};
