import React from "react";
import { Headline } from "components/headline";
import styles from "./index.module.scss";

export function Message(): JSX.Element {
  return (
    <section className={styles.container} style={{ backgroundImage: `url("./img/castle-interior.jpg")` }}>
      <Headline title="国王からの通達" label="MESSAGE" className={styles.headline} coloredTitle />
      <p className="sansSerif">
        {`このサロンはただのプログラミングを教えるだけのサロンではありません。
        「最高のプロダクトを生み出す最強のコミュニティをつくりたい」という思いからできています。
        あくまで根底にあるのはモノづくりです。学んで終わりではなく実際にプロダクトをリリースしていきます。
        この思いに共感できる方、ワクワクする方に入っていただきたいと思います。`}
      </p>
      <p className="sansSerif">
        {`私はこの信念の実現に向けて最強のコミュニティづくりに注力します。
        もちろんその中には「プログラミングスキルの向上」も最優先事項として含まれています。
        エンジニアを目指す方も多いかと思いますが、それはこのサロンも願っていることです。
        みなさんがIT企業に就職し、更にスキルアップして、より最高のプロダクトづくりができることを求めています。
        そのためのサポートは惜しみなく行う予定です。`}
      </p>
      <p className="sansSerif">
        {`正直、このようなサロンは前例がないレベルの最先端な取り組みだと思っています。
        私自身うまく立ち回れるか不安ですが、そういった不安も一緒に楽しめる方に入っていただけると嬉しいです。
        個人の進化はもちろん、コミュニティの進化も目指して、一緒に最高のモノづくりをしましょう。`}
      </p>
    </section>
  );
}
