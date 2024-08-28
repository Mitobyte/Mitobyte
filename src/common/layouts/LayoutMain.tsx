'use client';

import { Providers } from '../../bootstrap/providers';

export const LayoutMain = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <Providers>{children}</Providers>
  )
}
