import React from "react";
import styles from "./index.module.scss";
import { Headline } from "components/headline";

const ITEMS = [
  {
    src: "/img/qast.png",
    title: "みんなでプロダクト開発",
    body:
      "私や周りの現役エンジニアが実際に新規事業のプロジェクトをたてます。\nプロジェクトはみんなが開発に参加できるように、GitHubを用いてコミュニティ内部限定のオープンソースで行います。 みなさんには私や現役エンジニアと一緒にプロダクトの改善をしていっていってもらいます。 コードを読んで勉強したり、実際に開発に参加してもらうことで実戦経験にもなります。 プロダクトが完成したら実際にリリースして、世の中のユーザーに使ってもらいましょう。",
  },
  {
    src: "/img/qast.png",
    title: "匿名で質問",
    body:
      "Qastというサービスを使用します。Qastには匿名で質問を行う機能があります。 何度も質問をするのは気が引ける、初歩的すぎて聞くのが恥ずかしいという方にも使っていただけます。 また私だけではなく誰でも回答できます。回答することでポイントが溜まっていきます。 自分が学ぶだけでなく、みんなで教え合い、コミュニティのナレッジを蓄えていきましょう。",
  },
  {
    src: "/img/qast.png",
    title: "ブログの購読・執筆",
    body:
      "Qastではブログを書くことも可能です。私のブログは当コミュニティ限定で読むことができます。 私以外にも有名企業出身のエンジニアも学びになるブログを執筆予定です。 フロントエンドだけではなくバックエンド・アプリエンジニア、後々は機械学習エンジニアも参加予定です。 また誰でもブログは書くことができるので、学んだことを積極的にアウトプットしていきましょう。 Qiitaだとたくさんの人に間違いを指摘されて怖いかもしれませんが、当コミュニティはみんなが優しく教えてくれます。",
  },
  {
    src: "/img/qast.png",
    title: "ニュース配信",
    body:
      "私の信念は「最高のプロダクトを生み出すコミュニティをつくること」です。 優れたプロダクトを知るためには世の中の動向を知る必要があります。 私が重要だと思ったニュースをコミュニティ内でシェアしたり、時事ネタを解説します。 コメント欄で議論を行い、みんなでアイディアの精度を高めていきましょう。",
  },
  {
    src: "/img/qast.png",
    title: "コミュニティ限定の勉強会",
    body:
      "コミュニティのメンバーしか参加できないオフラインでの講座を考えています。 フロントエンド・バックエンド・アプリ開発など講座内容は適宜考えていきます。 プログラミング以外だと就活・転職活動講座も考えています。 またコミュニティ内での交流はモチベーションの向上に繋がると考えており、 プログラミングを一緒に勉強するもくもく会や、交流会も開催予定です。 東京だけでなく各都市でも定期的に行いたいと考えています。",
    notes: [
      "新型コロナウイルス感染症の影響が落ち着いてから計画いたします。",
      "オフラインでの講座は別途、費用がかかります。",
    ],
  },
];

export function Contents(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONTENTS</h1>
      <ul>
        {ITEMS.map(({ src, title, body, notes }, index) => (
          <li key={title} style={(index + 1) % 2 === 0 ? undefined : { backgroundImage: `url("./img/ink.png")` }}>
            <img src={src} />
            <h2>
              <span>{String(index + 1).padStart(2, "0")}. </span>
              {title}
            </h2>
            <p className="sansSerif">{body}</p>
            {notes && (
              <ul>
                {notes.map((note, index) => (
                  <li key={note} className="sansSerif">{`※${index + 1} ${note}`}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div>
        <Headline
          title="他にも企画中"
          label="AND MORE"
          type="h2"
          baseFontSize="1.1rem"
          className={styles.headline}
          coloredTitle
        />
        <p className="sansSerif">
          {`ただプログラミングを学ぶだけのサロンではありません。
          最高のプロダクトを生み出すために、日々模索、そして進化していく必要があります。
          コミュニティのあり方をみんなと一緒に考え、みんなで成長させていくことが何よりも重要です。
          ここに書いてある以外にもおもしろいことは積極的に開催しましょう。`}
        </p>
      </div>
    </section>
  );
}
