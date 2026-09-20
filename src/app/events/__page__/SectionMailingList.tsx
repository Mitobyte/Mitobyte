import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { MailingListSignup } from "@/common/components/Forms/MailingList/MailingListSignup";

export interface SectionMailingListProps extends Omit<
  WrapperProps,
  "children"
> {}

/** Full-bleed tinted band holding the mailing-list signup, ruled top and bottom. */
export const SectionMailingList = ({
  background = "codeBlue.50",
  paddingTop = 16,
  paddingBottom = 16,
  borderTop = "1px solid",
  borderBottom = "1px solid",
  borderColor = "syntaxBlack.500",
  ...rest
}: SectionMailingListProps) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderColor={borderColor}
      {...rest}
    >
      <MailingListSignup />
    </Wrapper>
  );
};
