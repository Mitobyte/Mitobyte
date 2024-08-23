'use client';

import React from "react";
import { Providers } from "../../bootstrap/providers";

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
