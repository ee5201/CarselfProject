import "../styles/globals.css";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Component />
        </>
      </ApolloSetting>
    </div>
  );
}
