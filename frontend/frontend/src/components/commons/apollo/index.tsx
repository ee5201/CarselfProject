import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function ApolloSetting(props) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
  // prettier-ignore

  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
