import { ReactNode } from 'react';
import css from './IconButton.module.scss';

export function IconButton({ children }: { children: ReactNode }) {
  return <button className={css.iconButton}>{children}</button>;
}
