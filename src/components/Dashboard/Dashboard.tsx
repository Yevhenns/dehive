import { Assets } from '../Assets/Assets';
import { Container } from '../Container/Container';
import { MarketOverview } from '../MarketOverview/MarketOverview';
import { TopPerfomer } from '../TopPerfomer/TopPerfomer';
import css from './Dashboard.module.scss'

export function Dashboard() {
  return (
    <Container>
      <div className={css.wrapper}>
        <h2>Dashboard</h2>
        <MarketOverview />
        <Assets />
        <TopPerfomer />
      </div>
    </Container>
  );
}
