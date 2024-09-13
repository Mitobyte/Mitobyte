import NextImage from "next/image";
import logo from "@/common/assets/logos-mitobyte/mitobyte.png";

export const LogoMitobyte = () => {
  return <NextImage alt="Mitobyte Logo" src={logo} width={200} height={200} />;
};
