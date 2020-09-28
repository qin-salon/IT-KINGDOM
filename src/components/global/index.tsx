import styles from "./index.module.scss";

export function Global({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
