import React from "react";
import styles from "./index.module.scss";

export function StepUp(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>
        <span>訓練</span>
        <span>STEP UP</span>
      </h1>
      <div className={styles.step} style={{ backgroundImage: `url("./img/step.jpg")` }}>
        <ul>
          <li>
            <p>{`学習したての方`}</p>
            <span>隊員〜什長</span>
          </li>
          <li>
            <p>{`基礎が分かってきた方`}</p>
            <span>百人将〜千人将</span>
          </li>
          <li>
            <p>{`開発ができる\nようになってきた方`}</p>
            <span>二千人将〜</span>
            <span>五千人将</span>
          </li>
          <li>
            <p>{`一通り経験して\nコミュニティを\nリードできる方`}</p>
            <span>将軍、</span>
            <span>大将軍</span>
          </li>
        </ul>
      </div>
      <div className={`sansSerif ${styles.text}`}>
        <p>
          プロジェクトにすぐ参加するのは難しいと思うので、まずはプログラミングの基礎知識を身につけましょう。
          （もちろんプロジェクトのコードはいつでも読むことはできます）。
          初心者向けの記事やGitHubを用いたプログラミング教材も用意する予定です。
          分からないところは過去にみんなが書いた記事からヒントを得たり、匿名で質問して助けてもらうことができます。
        </p>
        <p>
          実際にプロジェクトの開発に参加しましょう。
          最初はコードが読めなかったり、何しているか分からなかったりするかと思います。
          ドキュメントはしっかり残す予定なので、ドキュメントを読みながら理解をしていって
          それでも分からない部分は質問して解決しましょう。 また定期的にコード解説の会を設ける予定です。
        </p>
        <p>
          どんどんコードを書いて、プロジェクトをリードしていってください。
          みんなが出すPR（プルリクエスト）をレビューしたり、コードをリファクタしたり、
          より良いプロダクトに育て上げていってください。 一緒に仕様を決めたり、タスクの割り振りなどもやりましょう。
        </p>
        <p>一緒にIT KINGDOMの運営をしましょう。個別に連絡させていただきます。</p>
      </div>
    </section>
  );
}
