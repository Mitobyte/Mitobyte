'use client';

import { Providers } from '../../bootstrap/providers';
import { Footer } from '../components/Footer/Footer';

export const LayoutMain = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <Providers>
      {children}
      <Footer />
    </Providers>
  )
}
