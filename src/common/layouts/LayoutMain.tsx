"use client";

import { usePathname } from "next/navigation";

import { Providers } from "../../bootstrap/providers";
import { Footer } from "../components/Footer/Footer";
import { LogoHeaderMitobyte } from "../components/Logos/LogoHeaderMitobyte";
import { NavigationMain } from "../components/Navigation/NavigationMain";
import { ROUTES } from "@/config/routes";

export const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === ROUTES.ROOT;

  return (
    <Providers>
      <LogoHeaderMitobyte animateIn={isHomePage} />
      <NavigationMain />
      {children}
      <Footer />
    </Providers>
  );
};
