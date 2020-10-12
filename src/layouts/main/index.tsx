import styles from "src/layouts/main/index.module.scss";

type Props = { children: React.ReactNode };

export function MainLayout({ children }: Props): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
