import { EventsLink } from "@/common/components/EventsLink/EventsLink";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionEventsLinkProps extends Omit<WrapperProps, "children"> {}

export const SectionEventsLink = ({
  maxWidth,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop
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
      <EventsLink />
    </Wrapper>
  );
}
