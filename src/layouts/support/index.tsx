import clsx from "clsx";
import Head from "next/head";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import styles from "src/layouts/support/index.module.scss";
import type { LayoutProps } from "src/layouts/types";

type Props = LayoutProps & { styled?: boolean };

export function SupportLayout({ page, description, children, styled }: Props): React.JSX.Element {
  return (
    <>
      <Head>
        <title>IT KINGDOM - {page}</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main className={clsx(styles.container, { [styles.styled]: styled })}>{children}</main>
      <Footer />
    </>
  );
}
