import NextImage from "next/image";

import eventbriteLogo from "@/common/assets/logos-third-party/logo-eventbrite.webp";

export const LogoEventbrite = () => {
  return (
    <NextImage
      alt="eventbrite logo"
      src={eventbriteLogo}
      width={30}
      height={30}
    />
  );
};
