import NextImage from 'next/image';
import smallMitobyteLogo from "@/common/assets/logos-mitobyte/mb-sm.svg";

export const LogoSmallMitobyte = () => {
  return (
    <NextImage alt="Mitobyte small logo" src={smallMitobyteLogo} height={65} width={65} />
  );
};
