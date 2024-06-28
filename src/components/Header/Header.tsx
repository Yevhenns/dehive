import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import css from './Header.module.scss';
import { Button } from '../Button/Button';

export type HeaderProps = {
  tvl: number;
};

export function Header({ tvl }: HeaderProps) {
  return (
    <header className={css.header}>
      <div className={css.headerItem}>
        <IconButton
          colorScheme="#41B7FF"
          aria-label="Search database"
          icon={<HamburgerIcon />}
        />
        <div className={css.logoWrapper}>
          <Logo />
        </div>
        <Button label="Connect" />
        {/* <Button variant="outline">Connect</Button> */}
      </div>
      <Box bg="#13141D">
        <span>TVL: ${tvl}</span>
        <Button label="Polygon" />
      </Box>
    </header>
  );
}
