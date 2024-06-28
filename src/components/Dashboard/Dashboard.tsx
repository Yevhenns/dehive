import { Assets } from "../Assets/Assets";
import { MarketOverview } from "../MarketOverview/MarketOverview";

export function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <MarketOverview />
            <Assets />
        </div >)
}