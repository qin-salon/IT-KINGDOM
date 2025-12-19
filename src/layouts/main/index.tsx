import Head from "next/head";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import styles from "src/layouts/main/index.module.scss";
import type { LayoutProps } from "src/layouts/types";

export function MainLayout({ page, children, description }: LayoutProps): React.JSX.Element {
  const title = `IT KINGDOM - ${page}`;
  const url = "https://it-kingdom.com";
  const image = "https://it-kingdom.com/img/ogp.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        {description ? <meta property="og:description" content={description} /> : null}
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IT KINGDOM" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
