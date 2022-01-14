import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import jaTranslations from "@shopify/polaris/locales/ja.json";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={jaTranslations}>
      <Component {...pageProps} />;
    </AppProvider>
  );
}

export default MyApp;
