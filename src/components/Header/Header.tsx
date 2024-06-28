import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import css from './Header.module.scss';

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
        <Logo />
        <Button variant="outline">Connect</Button>
      </div>
      <Box bg="#13141D">
        <span>TVL: ${tvl}</span>
        <Button
          rightIcon={<ChevronDownIcon />}
          colorScheme="#41B7FF"
          aria-label="Dropdown"
          variant="outline"
        >
          Polygon
        </Button>
      </Box>
    </header>
  );
}
