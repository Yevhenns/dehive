import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import css from './MarketOverview.module.scss'
const data = [
  { name: 'Page A', ethcore: 100, poly: 200 },
  { name: 'Page B', ethcore: 280, poly: 250 },
  { name: 'Page C', ethcore: 240, poly: 360 },
  { name: 'Page D', ethcore: 400, poly: 300 }
];

export function MarketOverview() {
  return (
    <ContentWrapper>
      <h2>MarketOverview</h2>
      <p>Prices value updates</p>
      <div className={css.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="ethcore" stroke="#A4D1E6" />
            <Line type="monotone" dataKey="poly" stroke="#8743FC" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ContentWrapper>
  );
}
