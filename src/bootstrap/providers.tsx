"use client";

import { mitobyteTheme } from "@/integrations/chakra/mitobyte-theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={mitobyteTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
