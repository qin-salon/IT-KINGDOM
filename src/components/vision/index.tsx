import clsx from "clsx";
import Image from "next/image";
import backgroundText from "src/components/vision/background-text.module.scss";
import frame from "src/components/vision/frame.module.scss";
import styles from "src/components/vision/index.module.scss";

export function Vision(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={clsx("nextImg", styles.icon, styles.front)}>
        <Image src="/img/vision/weapon.png" alt="Vision section's icon" width={60} height={56} loading="eager" />
      </div>

      <h1 className={clsx(styles.title, styles.front)}>
        <strong>最高</strong>の<span>プロダクト</span>を生み出す
        <br />
        <strong>最強</strong>の<span>コミュニティ</span>をつくりたい
      </h1>

      <p className={clsx("sansSerif", styles.paragraph, styles.front)}>
        {`私はこのサロンからたくさんのユーザーに使われるプロダクトを生み出したいと思っています。\nみんなで一緒にスキルアップしておもしろいプロダクトを開発しましょう。`}
      </p>

      <div className={frame.first}>
        <h2>
          そのために<strong>私</strong>がやること
        </h2>
        <p className="sansSerif">
          プロダクトを作るために必要なプログラミングスキルを伝授します。
          <br />
          必要に応じてデザイン・マーケティング・プレゼンテーション・アイディア出しなどの講座も行います。
        </p>
        <div className={clsx("nextImg", frame.goldTopLeft)}>
          <Image src="/img/vision/gold-top-left.png" alt="Background" width={333} height={222} loading="eager" />
        </div>
        <div className={clsx("nextImg", frame.shimabuUdegumi)}>
          <Image src="/img/vision/shimabu_udegumi.png" alt="Shimabu" width={219} height={286} loading="eager" />
        </div>
      </div>

      <div className={frame.second}>
        <h2>
          <strong>みんな</strong>にやってもらうこと
        </h2>
        <p className="sansSerif">
          最高のプロダクトが作れるように、各自スキルアップに励む必要があります。
          <br />
          学んだことは積極的にアウトプットを行い、コミュニティ全体を強くしていきましょう。
        </p>
        <div className={clsx("nextImg", frame.goldBottomRight)}>
          <Image src="/img/vision/gold-bottom-right.png" alt="Background" width={333} height={222} loading="eager" />
        </div>
        <div className={clsx("nextImg", frame.goldTopLeft)}>
          <Image src="/img/vision/gold-top-left.png" alt="Background" width={333} height={222} loading="eager" />
        </div>
        <div className={clsx("nextImg", frame.soldiers)}>
          <Image src="/img/vision/soldiers.png" alt="Salon members" width={385} height={255} loading="eager" />
        </div>
      </div>

      <small className={clsx("sansSerif", styles.note)}>
        ※ プロジェクトの動きや中の様子を見たいだけの方もご参加いただけます。
      </small>

      <span className={clsx(backgroundText.common, backgroundText.sai)}>最</span>
      <span className={clsx(backgroundText.common, backgroundText.kou)}>高</span>
      <span className={clsx(backgroundText.common, backgroundText.kyou)}>強</span>
    </section>
  );
}
