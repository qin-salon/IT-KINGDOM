import React from "react";
import styles from "./index.module.scss";

export function Vision(): JSX.Element {
  return (
    <section className={styles.container}>
      <img src="/img/weapon.png" alt="Vision section's icon" loading="lazy" />

      <h1>
        <strong>最高</strong>の<span>プロダクト</span>を生み出す
        <br />
        <strong>最強</strong>の<span>コミュニティ</span>をつくりたい
      </h1>

      <p className="sansSerif">
        私はこのサロンが、最先端で、優れたプロダクトを生み出すための最高の形だと信じています。
        <br />
        みんなで最高のプロダクトを作ろう。
      </p>

      <div>
        <h2>
          そのために<strong>私</strong>がやること
        </h2>
        <p className="sansSerif">
          メンバーの戦闘力の強化。最高のプロダクトを作るコミュニティにできるよう最善を尽くします。
        </p>
        <img className={styles.goldPowder} src="/img/gold-powder.png" alt="Background image of frame" loading="lazy" />
        <img className={styles.knight} src="/img/knight.png" alt="Salon owner image" loading="lazy" />
      </div>
      <div>
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
        <img className={styles.goldPowder} src="/img/gold-powder.png" alt="Background image of frame" loading="lazy" />
        <img className={styles.soldiers} src="/img/soldiers.png" alt="Salon members image" loading="lazy" />
      </div>

      <small className="sansSerif">
        ※ プログラミング学習の予定はなく、プロジェクトの動きや中の様子を見たいだけの方もご加入いただけます。
      </small>

      <span className={styles.sai}>最</span>
      <span className={styles.kou}>高</span>
      <span className={styles.kyou}>強</span>
    </section>
  );
}
