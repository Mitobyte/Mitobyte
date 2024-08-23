import { Box, BoxProps, Container, ContainerProps } from "@chakra-ui/react";

export interface WrapperProps {
  background?: BoxProps["background"];
  paddingTop?: BoxProps["paddingTop"];
  paddingBottom?: BoxProps["paddingBottom"];
  paddingLeft?: BoxProps["paddingLeft"];
  paddingRight?: BoxProps["paddingRight"];
  marginTop?: BoxProps["marginTop"];
  marginRight?: BoxProps["marginRight"];
  marginBottom?: BoxProps["marginBottom"];
  marginLeft?: BoxProps["marginLeft"];
  maxWidth?: ContainerProps["maxWidth"];
  children: React.ReactNode;
}

export const Wrapper = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  maxWidth = "full",
  children,
}: WrapperProps) => {
  return (
    <Box
      background={background}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};
