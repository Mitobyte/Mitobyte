import React from "react";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { MailingListSignup } from "@/common/components/Forms/MailingList/MailingListSignup";

export interface SectionEventsLinkProps
  extends Omit<WrapperProps, "children"> {}

export const MailingListSignupSection = ({
  maxWidth,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionEventsLinkProps) => {
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
      <MailingListSignup />
    </Wrapper>
  );
};
