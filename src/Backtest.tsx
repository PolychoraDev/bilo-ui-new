import { NetworkStatus } from "@apollo/client";
import { useListBacktestStrategyStateQuery } from "./generated/graphql";
import { useInView } from "react-intersection-observer";

export function Backtest() {
  const { networkStatus, error, data, fetchMore } =
    useListBacktestStrategyStateQuery({
      variables: {
        symbol: "ETHUSDT",
        interval: "15",
        tradingStrategyName: "BollingerBandsStrategyV9",
        limit: 500,
      },
      notifyOnNetworkStatusChange: true,
      onError: (error) => {
        console.error("Error fetching data", error);
      },
    });

  const [ref, inView] = useInView({
    threshold: 0,
  });

  if (inView && networkStatus !== NetworkStatus.fetchMore) {
    fetchMore({
      variables: {
        offset: data?.defaultdb_BacktestStrategyState.length,
      },
    });
  }

  if (networkStatus === NetworkStatus.loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <ul>
      {data?.defaultdb_BacktestStrategyState.map((strategyState, index) => (
        <li
          key={strategyState.id}
          ref={
            index === data.defaultdb_BacktestStrategyState.length - 1
              ? ref
              : undefined
          }
        >
          {strategyState.id}
        </li>
      ))}
      {networkStatus === NetworkStatus.fetchMore && <p>Loading more...</p>}
    </ul>
  );
}
