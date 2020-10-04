import clsx from "clsx";
import Link from "next/link";
import styles from "src/components/header/index.module.scss";

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <h1>
        <Link href="/">
          <a>
            <img src="/img/logo.png" alt="Logo of 'IT KINGDOM'" />
          </a>
        </Link>
      </h1>
      <nav className={clsx("sansSerif", styles.nav)}>
        <ul>
          <li>
            <Link href="/faq">
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
