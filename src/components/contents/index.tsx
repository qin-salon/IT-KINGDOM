import Image from "next/image";
import styles from "src/components/contents/index.module.scss";
import { Headline } from "src/components/headline";

const ITEMS = [
  {
    src: "/img/contents/programming.png",
    bgSrc: "/img/ink.png",
    title: "プロダクト開発",
    body: "私と運営の現役エンジニアが新規事業のプロジェクトをたてます。プロジェクトのコードはみんなが読めるようにGitHubを使用し、適宜コードの解説も行います。開発に参加したい方は、実際にコードを書いてチーム開発の実戦を経験していただくことも可能です。",
  },
  {
    src: "/img/contents/qa.png",
    title: "みんなに質問",
    body: "運営が独自でつくったプラットフォームがあり、そこには質問機能があります。質問をしていただくと運営やサロン内のエンジニアが回答します。質問の際は回答者が答えやすくなるように詳細な情報を添えてください。また皆さんも回答側になれますので、困っている仲間がいたら助けましょう。",
  },
  {
    src: "/img/contents/blog.png",
    bgSrc: "/img/ink.png",
    title: "メモ & アウトプット",
    body: "IT KINGDOMのプラットフォームにはメモ機能も備わっています。外部だと心無い指摘が怖いかもしれませんが、当サロンではみんなが優しく教えてくれますので気軽にアウトプットできます。運営のエンジニアも適宜メモを残していく予定です。",
  },
  {
    src: "/img/contents/news.png",
    title: "限定コンテンツ",
    body: "最低でも月に6本は動画が配信されます。YouTubeより数ヶ月早く講座が見れたり、サロンでしか見られない講座もございます。月に一度、運営のエンジニアが旬な情報をまとめてお届けするライブ配信も人気があります。またSlackでは毎日活発にニュースのシェアが行われています。",
  },
  {
    src: "/img/contents/community.png",
    bgSrc: "/img/ink.png",
    title: "楽しめるコミュニティ",
    body: "ただ学ぶだけではなく楽しめるサロンを目指して、頻繁にビデオチャットやSlackを用いて交流の場を設けています。例えば毎日朝活が行われていたり、一緒に勉強するもくもく会、学びの成果を発表するLT、オンライン交流会、ライブ配信で質疑応答・雑談など、様々なイベントが実施されています。",
    notes: ["新型コロナウイルス感染症の影響が落ち着き次第、オフラインイベントも実施します。"],
  },
];

export function Contents(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONTENTS</h1>
      <ul>
        {ITEMS.map(({ src, bgSrc, title, body, notes }, index) => (
          <li key={title} className={styles.content} style={bgSrc ? { backgroundImage: `url("${bgSrc}")` } : undefined}>
            <div className={styles.img}>
              <Image src={src} alt={title} width={220} height={230} loading="eager" />
            </div>
            <h2>
              <span>{String(index + 1).padStart(2, "0")}. </span>
              {title}
            </h2>
            <p className="sansSerif">{body}</p>
            {notes && (
              <ul>
                {notes.length === 1 ? (
                  <li className="sansSerif">{`※ ${notes[0]}`}</li>
                ) : (
                  notes.map((note, index) => <li key={note} className="sansSerif">{`※${index + 1} ${note}`}</li>)
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.more}>
        <Headline title="他にも企画中" label="AND MORE" type="h2" className={styles.headline} coloredTitle />
        <p className="sansSerif">
          {`当サロンは常に進化していきます。
          良いアイディアを一緒に考えみんなで成長させていく予定です。
          ここに書いてあること以外にもおもしろいことは積極的にやりましょう。`}
        </p>
      </div>
    </section>
  );
}
