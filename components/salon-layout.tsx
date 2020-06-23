import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

const NAVS = [
  { href: "/qin/use", label: "使い方" },
  { href: "/qin", label: "サービス" },
  { href: "/qin/me", label: "マイページ" },
];

type Props = { children?: ReactNode; title?: string };

const SalonLayout = ({ children, title = "IT KINGDOM" }: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <h1>Qin（秦国）</h1>
      <p>※このページがサロンメンバー専用のページです。</p>

      <hr />

      <nav>
        {NAVS.map(({ href, label }) => (
          <Link href={href} key={href}>
            <a>{label}</a>
          </Link>
        ))}
      </nav>
    </header>

    <hr />

    {children}

    <style jsx>{`
      a + a {
        margin-left: 12px;
      }
    `}</style>
  </div>
);

export default SalonLayout;
