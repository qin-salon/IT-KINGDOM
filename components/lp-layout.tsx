import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

const HEADER_NAVS = [
  { href: "/", label: "トップページ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/qin/use", label: "ログイン" },
];

const FOOTER_NAVS = [
  { href: "/", label: "トップページ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/tos", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/tokushoho", label: "​特商法に基づく表記" },
];

type Props = { children?: ReactNode; title?: string };

const Layout = ({ children, title = "IT KINGDOM" }: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <h1>IT KINGDOM</h1>
      <nav>
        {HEADER_NAVS.map(({ href, label }) => (
          <Link href={href} key={href}>
            <a>{label}</a>
          </Link>
        ))}
      </nav>
    </header>

    <hr />

    {children}

    <hr />

    <footer>
      <nav>
        {FOOTER_NAVS.map(({ href, label }) => (
          <Link href={href} key={href}>
            <a>{label}</a>
          </Link>
        ))}
      </nav>

      <small lang="en">IT KINGDOM @ 2020</small>
    </footer>

    <style jsx>{`
      a + a {
        margin-left: 12px;
      }
    `}</style>
  </div>
);

export default Layout;
