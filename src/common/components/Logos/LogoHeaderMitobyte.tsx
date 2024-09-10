import { Box, Flex } from "@chakra-ui/react";
import NextImage from 'next/image';

import logo from "@/common/assets/logos-mitobyte/mb-lg.svg";

const dotbg = 'white';
const dotcolor = '#999999';
const dotsize = '2px';
const dotspace = '15px';

export const LogoHeaderMitobyte = () => {

  return (
    <Box
      background={`linear-gradient(90deg, ${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      linear-gradient(${dotbg} calc(${dotspace} - ${dotsize}), transparent 1%) center / ${dotspace} ${dotspace},
      ${dotcolor}`}
    >
      <Flex pointerEvents="none" mx="auto" justifyContent="center" mb={{ base: "-28px", lg: "-65px" }} pt="67px" maxWidth={{ base: "350px", lg: "800px" }}>
        <NextImage alt="Mitobyte logo" src={logo} height={274} width={836} style={{ zIndex: 3 }} />
      </Flex>
    </Box>
  );
};
