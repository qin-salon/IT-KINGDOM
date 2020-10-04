import { Headline } from "src/components/headline";

import styles from "./index.module.scss";

export function Message(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundText}>
        <Headline title="国王のメッセージ" label="MESSAGE" className={styles.headline} coloredTitle />
        <div className={styles.text}>
          <p className="sansSerif">
            {`IT KINGDOMはただプログラミングを教えるだけのサロンではありません。
              学んで終わりではなくプロダクトをリリースし、実際にビジネスとして展開していきます。
              そこで得た収益をサロンに還元する、それが私が目指す世界です。`}
          </p>
          <p className="sansSerif">
            {`私はその実現に向けてサロンメンバーのIT力向上に注力します。
              ITエンジニアを目指す方も多いと思われますが、サロンではそのサポートもいたします。
              みなさんがIT企業に就職し、更にスキルアップして、また一緒に開発できることを願っています。`}
          </p>
          <p className="sansSerif">
            {`このような形で実際にビジネスを行うのは前例の殆どない最先端な取り組みです。
              私も不安ではありますが、そういった不安も一緒に楽しめる方に入っていただけると嬉しいです。
              個々の進化はもちろん、コミュニティの進化も目指して、一緒に最高のモノづくりをしましょう。`}
          </p>
        </div>
      </div>
    </section>
  );
}
