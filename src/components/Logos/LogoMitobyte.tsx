import { Image } from "@chakra-ui/react";
import NextImage from 'next/link';

export const LogoMitobyte = () => {
  return (
    <Image
      as={NextImage}
      alt="Mitobyte Logo"
      src="@/common/assets/logos-mitobyte/mitobyte.png"
      width="200px"
      margin="0 auto"
    />
  );
};
