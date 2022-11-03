import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import { store } from "../redux/app/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
