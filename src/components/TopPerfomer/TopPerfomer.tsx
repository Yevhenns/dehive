import Image from 'next/image';
import { Button } from '../Button/Button';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { Info } from './Info/Info';
import css from './TopPerfomer.module.scss';
import { Description } from './Description/Description';

export function TopPerfomer() {
  return (
    <div className={css.wrapper}>
      <h3>TopPerfomer</h3>
      <ContentWrapper>
        <div className={css.impulseWrapper}><Image src={'/impulse.png'} width={99} height={32} alt='impulse' /></div>
        <div className={css.logoWrapper}>
          <Image src={'/impulseLogo.png'} width={80} height={80} alt='logo' />
          <div className={css.logoTitle}>
            <span>DHV / QUICK</span>
            <Image src={'/question.png'} width={17} height={18} alt="question" /></div>
        </div>
        <div className={css.description}>
          <Description title='QuickSwap' />
          <Description title='Volatility:' description='High' />
          <Description title='Risk:' description='Low' />
        </div>
        <div className={css.rewards}>
          <div>
            <span>Your rewards:</span>
            <span className={css.rewardsSum}>$10,678.12</span>
          </div>
          <Button label='Claim rewards' />
        </div>
        <div className={css.infoWrapper}>
          <Info title="APR" amount={119.11} apr={287.4} question />
          <Info title="Total value locked" amount={119.11} apr={287.4} />
          <Info title="Your deposits" amount={119.11} apr={287.4} />
        </div>
        <div className={css.buttonsWrapper}>
          <Button label="Stake" />
          <Button label="Unstake" />
        </div>
      </ContentWrapper>
    </div>
  );
}
