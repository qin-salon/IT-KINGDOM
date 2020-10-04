import clsx from "clsx";
import styles from "src/components/vision/index.module.scss";

export function Vision(): JSX.Element {
  return (
    <section className={styles.container}>
      <img
        className={clsx(styles.icon, styles.front)}
        src="/img/vision/weapon.png"
        alt="Vision section's icon"
        loading="lazy"
      />

      <h1 className={clsx(styles.title, styles.front)}>
        <strong>最高</strong>の<span>プロダクト</span>を生み出す
        <br />
        <strong>最強</strong>の<span>コミュニティ</span>をつくりたい
      </h1>

      <p className={clsx("sansSerif", styles.paragraph, styles.front)}>
        {`私はこのサロンから世界中で使われる最高のプロダクトを生み出したいと思っています。\nみんなでスキルアップして良いプロダクトを作りましょう。`}
      </p>

      <div className={styles.frame}>
        <h2>
          そのために<strong>私</strong>がやること
        </h2>
        <p className="sansSerif">
          プロダクトを作るために必要なプログラミングやデザインのスキルを伝授します。
          <br />
          必要に応じて経営企画・マーケティング・プレゼンテーション・マインドセットの講座も行います。
        </p>
        <img className={styles.goldTopLeft} src="/img/vision/gold-top-left.png" alt="Background" loading="lazy" />
        <img className={styles.shimabu_udegumi} src="/img/vision/shimabu_udegumi.png" alt="Shimabu" loading="lazy" />
      </div>
      <div className={styles.frame}>
        <h2>
          <strong>みんな</strong>にやってもらうこと
        </h2>
        <p className="sansSerif">
          最高のプロダクトが作れるように、各々スキルアップに励む必要があります。
          <br />
          また学んだことは積極的にアウトプットを行い、国力の向上に努めてください。
        </p>
        <img
          className={styles.goldBottomRight}
          src="/img/vision/gold-bottom-right.png"
          alt="Background"
          loading="lazy"
        />
        <img className={styles.goldTopLeft} src="/img/vision/gold-top-left.png" alt="Background" loading="lazy" />
        <img className={styles.soldiers} src="/img/vision/soldiers.png" alt="Salon members" loading="lazy" />
      </div>

      <small className={clsx("sansSerif", styles.note)}>
        ※ プロジェクトの動きや中の様子を見たいだけの方もご参加いただけます。
      </small>

      <span className={clsx(styles.backgroundText, styles.sai)}>最</span>
      <span className={clsx(styles.backgroundText, styles.kou)}>高</span>
      <span className={clsx(styles.backgroundText, styles.kyou)}>強</span>
    </section>
  );
}
