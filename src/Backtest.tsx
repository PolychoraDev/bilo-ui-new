import { useListBacktestStrategyStateQuery } from "./generated/graphql";

export function Backtest() {
  const { loading, error, data } = useListBacktestStrategyStateQuery({
    variables: {
      symbol: "ETHUSDT",
      interval: "15",
      tradingStrategyName: "BollingerBandsStrategyV9",
      limit: 10,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <ul>
      {data?.defaultdb_BacktestStrategyState.map((strategyState) => (
        <li key={strategyState.id}>{JSON.stringify(strategyState, null, 2)}</li>
      ))}
    </ul>
  );
}
