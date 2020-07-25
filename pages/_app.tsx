import React from "react";
import { AppProps } from "next/app";
import "ress/dist/ress.min.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: 游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "Hiragino Mincho Pro", HGS明朝E, メイリオ,
            Meiryo, serif;
        }
        h1,
        h2,
        h3 {
          font-weight: 600;
        }
        ul {
          list-style: none;
        }
        .sansSerif {
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
        }
      `}</style>
    </>
  );
}
