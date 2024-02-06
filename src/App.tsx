import { useState } from "react";
import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { Backtest } from "./Backtest";
import { offsetLimitPagination } from "@apollo/client/utilities";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://smart-yeti-44.hasura.app/v1/graphql",
      headers: {
        // Authorization: `Bearer ${authToken}`
        "x-hasura-admin-secret":
          "0lfebsntBTcXg3mnTYkGn7n0LBlRA7Y5VqpC7X6AVLnV3kMtqI9AbKlfeb02unzJ",
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            defaultdb_BacktestStrategyState: offsetLimitPagination(),
          },
        },
      },
    }),
  });
};

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <Backtest />
    </ApolloProvider>
  );
}

export default App;
