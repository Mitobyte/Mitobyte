import NextImage from "next/image";
import meetupLogo from "@/common/assets/logos-third-party/logo-meetup.png";

export const LogoMeetup = () => {
  return (
    <NextImage alt="meetup logo" src={meetupLogo} width={35} height={35} />
  );
};
