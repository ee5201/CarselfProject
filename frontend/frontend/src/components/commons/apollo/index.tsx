import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export default function ApolloSetting(props) {
  const uploadLink = createUploadLink({
    uri: "http://localhost:3000/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as inknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  // prettier-ignore

  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
