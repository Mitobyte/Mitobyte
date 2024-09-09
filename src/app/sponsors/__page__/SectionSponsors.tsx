import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

import { SponsorCarousel } from "@/common/components/SponsorCarousel/SponsorCarousel";

export interface SectionSponsorsProps extends Omit<WrapperProps, "children"> {}

export const SectionSponsors = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionSponsorsProps) => {

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
      <SponsorCarousel />
    </Wrapper>
  );
};
