import { NextSeo } from "next-seo";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import styles from "src/layouts/main/index.module.scss";
import type { LayoutProps } from "src/layouts/types";

export function MainLayout({ page, children, description }: LayoutProps): JSX.Element {
  return (
    <>
      <NextSeo
        title={`IT KINGDOM - ${page}`}
        description={description}
        openGraph={{
          url: `https://it-kingdom.com`,
          images: [{ url: `https://it-kingdom.com/img/ogp.jpg`, alt: "IT KINGDOM" }],
        }}
      />
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
