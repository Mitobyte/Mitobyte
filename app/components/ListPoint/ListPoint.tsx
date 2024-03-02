import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

const wrapperStyles = {
  border: "2px solid black",
  fontWeight: "bold",
  borderRadius: "100%",
  height: "25px",
  width: "25px",
  marginRight: "35px",
  display: "inline-block",
  _before: {
    content: '""',
    position: "absolute",
    top: "10px",
    left: "23px",
    transform: "translateY(-50%)",
    width: "25px",
    height: "2px",
    background: "black",
  },
};

export interface ListPointProps {
  text: string;
}

export const ListPoint: FC<ListPointProps> = ({ text }) => {
  return (
    <Box {...wrapperStyles} width="25px" position="relative">
      <Text textAlign="center">{text}</Text>
    </Box>
  );
};
