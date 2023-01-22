import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import CustomerScreen from './screens/CustomerScreen';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './navigator/RootNavigator';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/wobbling-cardinal",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}


