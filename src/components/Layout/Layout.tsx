import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Box } from '@chakra-ui/react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={spaceGrotesk.className}>
      <Header tvl={23456726} />
      <main>{children}</main>
    </div>
  );
}
