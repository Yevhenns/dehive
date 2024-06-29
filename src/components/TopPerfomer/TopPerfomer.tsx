import { Button } from '../Button/Button';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { Info } from './Info/Info';
import css from './TopPerfomer.module.scss';

export function TopPerfomer() {
  return (
    <div className={css.wrapper}>
      <h3>TopPerfomer</h3>
      <ContentWrapper>DHV / QUICK</ContentWrapper>
      <div className={css.infoWrapper}>
        <Info title="APR" amount={119.11} apr={287.4} question />
        <Info title="Total value locked" amount={119.11} apr={287.4} />
        <Info title="Your deposits" amount={119.11} apr={287.4} />
      </div>
      <div className={css.buttonsWrapper}>
        <Button label="Stake" />
        <Button label="Unstake" />
      </div>
    </div>
  );
}
