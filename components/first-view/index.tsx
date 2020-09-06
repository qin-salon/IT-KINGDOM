import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export function FirstView(): JSX.Element {
  return (
    <section className={styles.container} style={{ backgroundImage: `url("./img/hero.jpg")` }}>
      <div>
        <h1>
          <div>
            チャンネル登録者<strong>5.3万人</strong>の
          </div>
          <div>
            エンジニア<span>YouTuber</span>がおくる
          </div>
          <div>オンラインサロン</div>
        </h1>
        <img src="/img/logo.png" alt="Logo image of 'IT KINGDOM'" />
        <Link href="/">
          <a>
            <img src="/img/entry-btn.png" alt="Entry button" />
          </a>
        </Link>
      </div>
    </section>
  );
}
