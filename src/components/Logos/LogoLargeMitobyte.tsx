import NextImage from "next/image";
import logo from "@/common/assets/logos-mitobyte/mb-lg.svg";
import { Box } from "@chakra-ui/react";

export const LogoLargeMitobyte = () => {
  return (
    <Box position="absolute" transform="translateX(-50%)" left="50%" width="100%">
      <NextImage alt="Mitobyte large logo" src={logo} height={274} width={836} />
    </Box>
  );
};
