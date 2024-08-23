import { Image } from "@chakra-ui/react";
import NextImage from "next/image";

export const LogoEventbrite = () => {
  return (
    <Image
      as={NextImage}
      alt="eventbrite logo"
      src="@/common/assets/logos-third-party/logo-eventbrite.png"
      width="25px"
    />
  );
};
