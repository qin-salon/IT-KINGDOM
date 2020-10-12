import clsx from "clsx";
import Link from "next/link";
import styles from "src/components/footer/index.module.scss";

const ITEMS = [
  { href: "/support/terms", label: "利用規約" },
  { href: "/support/privacy-policy", label: "プライバシーポリシー" },
  { href: "/support/commerce", label: "特定商取引法に基づく表記" },
  { href: "", label: "お問い合わせ" },
];

export function Footer(): JSX.Element {
  return (
    <footer className={clsx("sansSerif", styles.container)}>
      <ul className={styles.links}>
        {ITEMS.map(({ href, label }) => (
          <li key={label} className={styles.link}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <small className={styles.copyright} lang="en">
        @ 2020 IT KINGDOM
      </small>
    </footer>
  );
}
