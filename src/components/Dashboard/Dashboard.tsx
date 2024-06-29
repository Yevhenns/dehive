import { Assets } from '../Assets/Assets';
import { Container } from '../Container/Container';
import { MarketOverview } from '../MarketOverview/MarketOverview';
import { TopPerfomer } from '../TopPerfomer/TopPerfomer';

export function Dashboard() {
  return (
    <Container>
      <h2>Dashboard</h2>
      <MarketOverview />
      <Assets />
      <TopPerfomer />
    </Container>
  );
}
