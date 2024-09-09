import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionDotsProps extends Omit<WrapperProps, "children" | "background"> {}

const dotbg = 'white';
const dotcolor = 'black';
const dotsize = '2px';
const dotspace = '15px';

export const SectionDots = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionDotsProps) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={`linear-gradient(90deg, ${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      linear-gradient(${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      ${dotcolor}`}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <></>
    </Wrapper>
  );
};
