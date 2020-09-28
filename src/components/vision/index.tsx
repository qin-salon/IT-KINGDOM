import clsx from "clsx";

import styles from "./index.module.scss";

export function Vision(): JSX.Element {
  return (
    <section className={styles.container}>
      <img
        className={clsx(styles.icon, styles.front)}
        src="/img/weapon.png"
        alt="Vision section's icon"
        loading="lazy"
      />

      <h1 className={clsx(styles.title, styles.front)}>
        <strong>最高</strong>の<span>プロダクト</span>を生み出す
        <br />
        <strong>最強</strong>の<span>コミュニティ</span>をつくりたい
      </h1>

      <p className={clsx("sansSerif", styles.paragraph, styles.front)}>
        {`私はこのサロンが、最先端で、優れたプロダクトを生み出すための最高の形だと信じています。\nみんなで最高のプロダクトを作ろう。`}
      </p>

      <div className={styles.frame}>
        <h2>
          そのために<strong>私</strong>がやること
        </h2>
        <p className="sansSerif">
          メンバーの戦闘力の強化。最高のプロダクトを作るコミュニティにできるよう最善を尽くします。
        </p>
        <img className={styles.goldPowder} src="/img/gold-powder.png" alt="Background of frame" loading="lazy" />
        <img className={styles.knight} src="/img/knight.png" alt="Salon owner" loading="lazy" />
      </div>
      <div className={styles.frame}>
        <h2>
          <strong>みんな</strong>にやってもらうこと
        </h2>
        <p className="sansSerif">
          自分の戦闘力の強化。最高のプロダクトを作るために、日々研鑽していただきます。
          <br />
          実際にプロダクト開発に参加しながら学んでいただきます。
          <br />
          また学んだことは積極的にアウトプットを行い、コミュニティ全体をパワーアップさせてください。
        </p>
        <img className={styles.goldPowder} src="/img/gold-powder.png" alt="Background of frame" loading="lazy" />
        <img className={styles.soldiers} src="/img/soldiers.png" alt="Salon members" loading="lazy" />
      </div>

      <small className={clsx("sansSerif", styles.note)}>
        ※ プログラミング学習の予定はなく、プロジェクトの動きや中の様子を見たいだけの方もご加入いただけます。
      </small>

      <span className={clsx(styles.backgroundText, styles.sai)}>最</span>
      <span className={clsx(styles.backgroundText, styles.kou)}>高</span>
      <span className={clsx(styles.backgroundText, styles.kyou)}>強</span>
    </section>
  );
}