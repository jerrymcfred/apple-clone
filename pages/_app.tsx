import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    // Higher order component
    <MoralisProvider appId="idjcWllyshcxwvSO3qwgu9qjK9HVdcdVTYPqMGNg" serverUrl="https://wsypzhp6nplc.usemoralis.com:2053/server" >
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </MoralisProvider>
  );
}

export default MyApp;
