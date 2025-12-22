import { cn } from "@lightsound/cn";
import Image from "next/image";
import backgroundText from "src/components/vision/background-text.module.scss";
import frame from "src/components/vision/frame.module.scss";
import styles from "src/components/vision/index.module.scss";

export function Vision(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <div className={cn(styles.icon, styles.front)}>
        <Image src="/img/vision/weapon.png" alt="Vision section's icon" width={60} height={56} loading="lazy" />
      </div>

      <h1 className={cn(styles.title, styles.front)}>
        <strong>最新</strong>の<span>AI・プログラミング</span>を学び
        <br />
        <strong>最強</strong>の<span>IT人材</span>になりましょう
      </h1>

      <p className={cn("sansSerif", styles.paragraph, styles.front)}>
        {`ITの世界は変化が速く、数ヶ月前の常識がすぐに通用しなくなります。
AIをはじめとした最新技術を正しく学び、これからの時代に求められるスキルを身につけましょう。`}
      </p>

      <div className={frame.first}>
        <h2>
          そのために<strong>しまぶー</strong>がやること
        </h2>
        <p className="sansSerif">
          AI時代を生き抜くために必要なスキルを伝授します。
          <br />
          プログラミングだけでなく、ITに関する知識を幅広くお伝えします。
        </p>
        <div className={frame.goldTopLeft}>
          <Image src="/img/vision/gold-top-left.png" alt="Background" width={333} height={222} loading="lazy" />
        </div>
        <div className={frame.shimabuUdegumi}>
          <Image src="/img/vision/shimabu_udegumi.png" alt="Shimabu" width={219} height={286} loading="lazy" />
        </div>
      </div>

      <div className={frame.second}>
        <h2>
          <strong>みんな</strong>にやってもらうこと
        </h2>
        <p className="sansSerif">
          「難しいことには価値がある」と考え、学ぶことを楽しんでください。
          <br />
          新しい技術を「おもしろい」と捉える姿勢が、学習を継続させる秘訣です。
        </p>
        <div className={frame.goldBottomRight}>
          <Image src="/img/vision/gold-bottom-right.png" alt="Background" width={333} height={222} loading="lazy" />
        </div>
        <div className={frame.goldTopLeft}>
          <Image src="/img/vision/gold-top-left.png" alt="Background" width={333} height={222} loading="lazy" />
        </div>
        <div className={frame.soldiers}>
          <Image src="/img/vision/soldiers.png" alt="Salon members" width={385} height={255} loading="lazy" />
        </div>
      </div>

      <small className={cn("sansSerif", styles.note)}>
        ※ プログラミングの情報が多めですが、非エンジニアの方もご参加いただけます。
      </small>

      <span className={cn(backgroundText.common, backgroundText.sai)}>最</span>
      <span className={cn(backgroundText.common, backgroundText.shin)}>新</span>
      <span className={cn(backgroundText.common, backgroundText.kyou)}>強</span>
    </section>
  );
}
