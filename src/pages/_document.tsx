import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): React.JSX.Element {
    const faviconPath = "favicon_io";
    return (
      <Html lang="ja">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}/favicon-16x16.png`} />
          <link rel="manifest" href={`${faviconPath}/site.webmanifest`} />
          <meta name="theme-color" content="#000000" key="themeColor" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
