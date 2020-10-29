import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/header/index.module.scss";
import { QIN_URL } from "src/constants";

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <h1>
        <Link href="/">
          <a>
            <Image src="/img/logo.png" alt="IT KINGDOM logo" loading="eager" width={180} height={38} priority />
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
            <a target="_blank" rel="noopener noreferrer" href={QIN_URL}>
              入国手続
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
