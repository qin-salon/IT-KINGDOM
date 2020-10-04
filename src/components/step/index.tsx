import styles from "src/components/step/index.module.scss";

const STEPS = [
  {
    label: "隊員〜什長",
    body: `まずはプログラミングの基礎知識を身につけよう。常に質問できる環境に加え、ライブ講座や簡単な課題も用意します。`,
  },
  {
    label: "百人将〜千人将",
    body: `プロダクト開発に参加しよう。コード解説も行い、まずはコードを読めるようにします。その後、実際にコードを書いてみましょう。`,
  },
  {
    label: "二千人将〜五千人将",
    body: `プロジェクトをリードしていこう。新機能追加、コードレビュー、リファクタリングなどプロダクトを改善させてみましょう。`,
  },
  {
    label: "将軍、大将軍、側近",
    body: `一緒にIT KINGDOMの運営をしましょう。個別に連絡させていただきます。`,
  },
];

export function StepUp(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.title_step}>
        <h1 className={styles.title}>
          <span>訓練</span>
          <span>STEP UP</span>
        </h1>
        <img className={styles.step} src="img/step.png" alt="Curriculum" />
      </div>
      <ul className={styles.text}>
        {STEPS.map(({ label, body }, index) => (
          <li key={label}>
            <h2>
              {`Lv.${index + 1}`}&ensp;&thinsp;{label}
            </h2>
            <p className="sansSerif">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
