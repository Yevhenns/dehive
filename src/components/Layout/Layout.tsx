import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Box } from '@chakra-ui/react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Box bg="#0F1019" w="320px">
      <Header tvl={23456726} />
      <main>{children}</main>
    </Box>
  );
}
