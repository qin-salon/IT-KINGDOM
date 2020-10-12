import Head from "next/head";
import styles from "src/layouts/support/index.module.scss";

type Props = { page: string; children: React.ReactNode };

export function SupportLayout({ page, children }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{`IT KINGDOM - ${page}`}</title>
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
}
