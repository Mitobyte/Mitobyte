'use client';

import { Providers } from '../../bootstrap/providers';
import { Footer } from '../components/Footer/Footer';
import { LogoHeaderMitobyte } from '../components/Logos/LogoHeaderMitobyte';
import { NavigationMain } from '../components/Navigation/NavigationMain';

export const LayoutMain = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <Providers>
      <LogoHeaderMitobyte />
      <NavigationMain />
      {children}
      <Footer />
    </Providers>
  )
}
