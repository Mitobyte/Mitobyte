import NextImage from "next/image";
import logo from "@/common/assets/logos-mitobyte/mb-lg.svg";

export const LogoLargeMitobyte = () => {
  return (
    <NextImage alt="Mitobyte large logo" src={logo} height={400} width={600} />
  );
};
