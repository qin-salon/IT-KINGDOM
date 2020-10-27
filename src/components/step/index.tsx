import Img from "react-optimized-image";
import styles from "src/components/step/index.module.scss";

const STEPS = [
  {
    label: "隊員〜什長",
    body: `まずはプログラミングの基礎知識を身につけよう。気軽に質問できる環境に加え、ライブ講座や簡単な課題も用意します。`,
  },
  {
    label: "百人将〜千人将",
    body: `実際に開発に参加しよう。適宜コード解説も行い、まずはコードを読めるようにします。その後は実際にコードを書いてみましょう。`,
  },
  {
    label: "二千人将〜五千人将",
    body: `プロジェクトをリードしていこう。新機能追加、コードレビュー、リファクタリングなどプロダクトを改善させてみましょう。`,
  },
  {
    label: "将軍、大将軍",
    body: `ここまできたら一人前。1つのプロジェクトだけでなくコミュニティ全体をリードできるように、みんなを引っ張っていってください！`,
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
        <Img
          className={styles.step}
          src={require(`@img/step.png`)}
          alt="Curriculum"
          sizes={[300, 400]}
          breakpoints={[400]}
          loading="lazy"
        />
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
