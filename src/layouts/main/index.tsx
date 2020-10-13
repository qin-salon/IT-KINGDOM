import Head from "next/head";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import styles from "src/layouts/main/index.module.scss";
import type { LayoutProps } from "src/layouts/types";

export function MainLayout({ page, children, description }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>IT KINGDOM - {page}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
