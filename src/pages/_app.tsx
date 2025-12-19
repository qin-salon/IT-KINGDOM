import "ress";
import "src/styles/global.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): React.JSX.Element {
  return <Component {...pageProps} />;
}
