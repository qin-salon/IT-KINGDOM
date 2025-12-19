import "ress";
import "src/styles/global.scss";

import type { Viewport } from "next";
import type { AppProps } from "next/app";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function App({ Component, pageProps }: AppProps): React.JSX.Element {
  return <Component {...pageProps} />;
}
