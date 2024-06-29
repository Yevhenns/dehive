import { ReactNode } from 'react';
import css from './ContentWrapper.module.scss';

export function ContentWrapper({ children }: { children: ReactNode }) {
  return <div className={css.wrapper}>{children}</div>;
}
