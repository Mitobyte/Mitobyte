import { Image } from "@chakra-ui/react";
import NextImage from "next/image";

export const LogoMeetup = () => {
  return (
    <Image
      as={NextImage}
      alt="meetup logo"
      src="@/common/assets/logos-third-party/logo-meetup.png"
      width="25px"
    />
  );
};
