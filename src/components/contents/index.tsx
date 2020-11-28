import Image from "next/image";
import styles from "src/components/contents/index.module.scss";
import { Headline } from "src/components/headline";

const ITEMS = [
  {
    src: "/img/contents/programming.png",
    bgSrc: "/img/ink.png",
    title: "プロダクト開発",
    body:
      "私と運営の現役エンジニアが新規事業のプロジェクトをたてます。プロジェクトのコードはみんなが読めるようにGitHubを使用し、適宜コードの解説も行います。開発に参加したい方は、実際にコードを書いてチーム開発の実戦を経験していただくことも可能です。",
  },
  {
    src: "/img/contents/qast.png",
    title: "気軽に質問",
    body:
      "Qastという外部サービスを使用します。Qastには匿名で質問を行う機能があり「何度も質問するのは気が引ける」「初歩的すぎて聞くのが恥ずかしい」という方も気軽に質問できます。また誰でも回答でき、回答していくことでポイントが溜まる仕組みがあります。楽しく教え合いましょう。",
  },
  {
    src: "/img/contents/blog.png",
    bgSrc: "/img/ink.png",
    title: "ブログ & アウトプット",
    body:
      "Qastにはブログ機能も備わっており、誰でもブログを書くことができます。外部だと心無い指摘が少し怖いかもしれませんが、当サロンではみんなが優しく教えてくれますので、積極的にアウトプットしていきましょう。また私や運営の現役エンジニアもブログを執筆します。",
  },
  {
    src: "/img/contents/news.png",
    title: "IT業界研究",
    body:
      "優れたプロダクトを作るためにはIT業界のトレンドを知る必要があります。私がニュースをサロン内でシェアしたり時事ネタを解説するので、みんなで議論しましょう。また就職や転職に必要なIT企業の研究や情報共有も行います。",
  },
  {
    src: "/img/contents/community.png",
    bgSrc: "/img/ink.png",
    title: "楽しめるコミュニティ",
    body:
      "ただ学ぶだけではなく楽しめるサロンにします。Slackを用いて頻繁に交流の場を設けます。一緒に勉強するもくもく会、ライブ配信で質疑応答、趣味のチャットグループ、オンライン飲み会、オフラインでの交流会などを予定しています。",
    notes: ["オフラインイベントは新型コロナウイルス感染症の影響が落ち着いてから計画いたします。"],
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
              <Image src={src} alt={title} width={220} height={230} />
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
          {`当サロンは最善を求めて常に進化していきます。
          良いアイディアを一緒に考えみんなで成長させていければと思っております。
          ここに書いてあること以外にもおもしろいことは積極的にやりましょう。`}
        </p>
      </div>
    </section>
  );
}
