import { AspectRatio, AspectRatioProps, Box, BoxProps } from "@chakra-ui/react";

export interface DotsProps extends AspectRatioProps {
  children: React.ReactNode;
}

const dotbg = "white";
const dotcolor = "black";
const dotsize = "2px";
const dotspace = "15px";

export const Dots = ({ children, ...rest }: DotsProps) => {
  return (
    <AspectRatio
      background={`linear-gradient(90deg, ${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      linear-gradient(${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      ${dotcolor}`}
      {...rest}
    >
      {children}
    </AspectRatio>
  );
};
