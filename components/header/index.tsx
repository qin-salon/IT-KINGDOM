import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <h1>
        <img src="/img/logo.png" />
      </h1>
      <nav className="sansSerif">
        <ul>
          <li>
            <Link href="/" as="/">
              <a>トップページ</a>
            </Link>
          </li>
          <li>
            <Link href="/faq" as="/faq">
              <a>よくある質問</a>
            </Link>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://qin.salon">
              ログイン
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
