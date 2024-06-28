import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';

export function Logo() {
  return (
    <Box mb={'10px'}>
      <Image src="/logoMobile.png" width={29} height={32} alt="logo" />
      {/* <Image src="/logoFull.png" width={53} height={58} alt="logo" /> */}
      <Image src="/logoText.svg" width={52} height={12} alt="logo text" />
    </Box>
  );
}
