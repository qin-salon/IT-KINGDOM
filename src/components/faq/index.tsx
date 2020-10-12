import styles from "src/components/faq/index.module.scss";

export function Faq(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>よくある質問</h1>
      <p style={{ textAlign: "center" }}>まだ質問がないので、よくある質問はありません。</p>
    </section>
  );
}
