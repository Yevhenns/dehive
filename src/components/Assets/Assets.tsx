import Image from 'next/image';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as data from '../recentActivities.json'
import css from './Assets.module.scss'

export function Assets() {
  return <ContentWrapper>
    <h3>Assets</h3>
    <div className={css.wrapper}>
      {data.map(item => {
        return (
          <div key={item.id} className={css.item}>
            <div>
              <Image src={item.icon} width={19} height={20} alt='icon' /></div>
            <div className={css.infoItem}>
              <span>{item.name}</span>
              <span>{item.type}</span>
            </div>
            <div className={css.infoItem}>
              <span>${item.sum}</span>
            </div>
            <div className={css.infoItem}>
              <span>{item.operation}</span>
              <span>{item.time}</span>
            </div>
          </div>)
      })}
    </div>
  </ContentWrapper >;
}
