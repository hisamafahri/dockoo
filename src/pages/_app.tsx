import { AppProps } from "next/app";
import { ThemeProvider } from "../styles/theme";
import { OverlayProvider } from "react-aria";
import { Page } from "../layouts/Page";
import "../styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ThemeProvider>
      <OverlayProvider>
        <Page><Component {...pageProps} /></Page>
      </OverlayProvider>
    </ThemeProvider>
  );
};

export default MyApp;
