import NextHeadSeo from "next-head-seo";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import styles from "src/layouts/main/index.module.scss";
import type { LayoutProps } from "src/layouts/types";

export function MainLayout({ page, children, description }: LayoutProps): React.JSX.Element {
  return (
    <>
      <NextHeadSeo
        title={`IT KINGDOM - ${page}`}
        description={description}
        og={{
          title: `IT KINGDOM - ${page}`,
          description,
          url: `https://it-kingdom.com`,
          image: `https://it-kingdom.com/img/ogp.jpg`,
          type: "website",
          siteName: "IT KINGDOM",
        }}
        twitter={{ card: "summary_large_image" }}
      />
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
