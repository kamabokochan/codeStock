import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
// import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "../styles/prism-overwrite.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
