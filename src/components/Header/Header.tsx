import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import css from './Header.module.scss';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { CiMenuBurger } from 'react-icons/ci';
import { IconButton } from '../IconButton/IconButton';

export type HeaderProps = {
  tvl: number;
};

export function Header({ tvl }: HeaderProps) {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerUpperItem}>
          <IconButton>
            <CiMenuBurger />
          </IconButton>
          <div className={css.logoWrapper}>
            <Logo />
          </div>
          <Button label="Connect" />
          {/* <Button variant="outline">Connect</Button> */}
        </div>
      </Container>
      <div className={css.headerBottomItemWrapper}>
        <Container>
          <div className={css.headerBottomItem}>
            <span>TVL: ${tvl}</span>
            <Button label="Polygon" />
          </div>
        </Container>
      </div>
    </header>
  );
}
