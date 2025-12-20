import { Headline } from "src/components/headline";
import styles from "src/components/message/index.module.scss";

export function Message(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundText}>
        <Headline title="国王のメッセージ" label="MESSAGE" className={styles.headline} coloredTitle />
        <div className={styles.text}>
          <p className="sansSerif">
            <strong>「難しいことに価値がある」</strong>
            <br />
            これは私の信念であり、今の時代に最も重要な要素だと考えています。
            <br />
            簡単なことに希少価値はなく、誰にでもできる仕事は必ず代替されます。
          </p>

          <p className="sansSerif">
            AI時代において、この流れはさらに加速します。
            <br />
            簡単な仕事は次々となくなり、残る仕事はより高度で、より難しいものになっていくでしょう。
            <br />
            IT KINGDOMでは、こうした時代を生き抜くために必要な知識を、私が分かりやすく解説します。
            <br />
            難しい内容もありますが、高い志を持ち、互いに高め合える仲間がいます。
          </p>

          <p className="sansSerif">
            <strong>「難しいことを、楽しみながら学べる」</strong>
            <br />
            それこそが、IT KINGDOMが提供する最大の価値かもしれません。
          </p>
        </div>
      </div>
    </section>
  );
}
