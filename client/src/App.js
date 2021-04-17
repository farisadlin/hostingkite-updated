import React from "react";
import LandingPage from './components/pages/Index'

import "./components/assets/css/index.scss";
import { ApolloProvider } from "@apollo/client";
import { client } from "./components/graphql/auth";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <LandingPage />
    </ApolloProvider>
  );
};

export default App;
