import { FAQSponsors } from "@/common/components/FAQSponsors/FAQSponsors";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionFaqProps extends Omit<WrapperProps, "children"> {}

export const SectionFaq = ({
  background,
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionFaqProps) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <FAQSponsors />
    </Wrapper>
  );
};
