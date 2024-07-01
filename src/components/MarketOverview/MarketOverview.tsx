import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import css from './MarketOverview.module.scss'
import { Types } from './Types/Types';
const data = [
  { name: 'Page A', "ETH-CORE": 100, 'Poly': 200, "Poly Gaming": 300 },
  { name: 'Page B', "ETH-CORE": 280, 'Poly': 250, "Poly Gaming": 290 },
  { name: 'Page C', "ETH-CORE": 240, 'Poly': 360, "Poly Gaming": 210 },
  { name: 'Page D', "ETH-CORE": 400, 'Poly': 300, "Poly Gaming": 400 }
];

export function MarketOverview() {
  return (
    <ContentWrapper>
      <h2>MarketOverview</h2>
      <p>Prices value updates</p>
      <div className={css.typesWrapper}>
        <Types name='ETH-CORE' description='Ethereum' />
        <Types name='Poly' description='Polygon' />
        <Types name='Poly Gaming' description='Polygon' />
      </div>
      <div className={css.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="ETH-CORE" stroke="#A4D1E6" />
            <Line type="monotone" dataKey="Poly" stroke="#8743FC" />
            <Line type="monotone" dataKey="Poly Gaming" stroke="#D20B06" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ContentWrapper>
  );
}
