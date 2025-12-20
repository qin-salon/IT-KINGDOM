import Image from "next/image";
import styles from "src/components/contents/index.module.scss";
import { Headline } from "src/components/headline";

const ITEMS = [
  {
    src: "/img/contents/news.png",
    bgSrc: "/img/ink.png",
    title: "毎日の動画配信",
    body: "毎日15分、AIやプログラミングの最新動向を扱う限定動画を配信しています。情報源は英語中心ですが、しまぶーが画面共有で一緒に読み解きながら解説するので、英語が苦手でも安心です。毎日キャッチアップするだけで、最新のトレンドを把握できます。",
  },
  {
    src: "/img/contents/programming.png",
    title: "毎月の限定コンテンツ",
    body: "毎月1回、ライブ講座とオンラインイベントを開催しています。ライブ講座では、最新の技術をハンズオン形式で解説します。オンラインイベントでは、しまぶーの近況共有、質問回答、雑談会に加えて、サロンメンバーが参加する発表会（いわゆるLT会）などもあります。",
  },
  {
    src: "/img/contents/blog.png",
    bgSrc: "/img/ink.png",
    title: "Slackでの優良な情報交換",
    body: "IT業界で定番のチャットツール「Slack」を導入し、AI、フロントエンド、バックエンド、デザインなど、幅広い分野の情報を共有しています。モチベーションを高めるしまぶーポエムや、（実は健康オタクの）しまぶーの健康ネタ投稿も、ひそかに好評です。",
  },
  {
    src: "/img/contents/qa.png",
    title: "いつでも質問可能",
    body: "しまぶーにいつでも質問することができ、これまで累計1,000件以上の質問に回答してきました。また1on1ミーティングも可能で、就職・転職をはじめとした個人的なキャリア相談なども承ります。",
  },
  {
    src: "/img/contents/community.png",
    bgSrc: "/img/ink.png",
    title: "楽しめるコミュニティ",
    body: "ただ学ぶだけではなく楽しめるサロンを目指して、頻繁に交流の場を設けています。例えば平日の午前と午後に、一緒に作業するもくもく会を頻繁に開催しています。また最近はオフラインイベントを解禁し、今後も定期的に開催する予定です。",
    notes: ["しまぶーの居住地である大阪での開催が多めですが、東京開催はサロンメンバーさんにお願いしています。"],
  },
];

export function Contents(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONTENTS</h1>
      <ul>
        {ITEMS.map(({ src, bgSrc, title, body, notes }, index) => (
          <li key={title} className={styles.content} style={bgSrc ? { backgroundImage: `url("${bgSrc}")` } : undefined}>
            <div className={styles.img}>
              <Image src={src} alt={title} width={220} height={230} loading="lazy" />
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
        <Headline title="他にも盛りだくさん" label="AND MORE" type="h2" className={styles.headline} coloredTitle />
        <p className="sansSerif">
          {`こちらでは紹介しきれないほど、多彩なコンテンツがございます。
また当サロンは完成形ではなく、メンバーとともに進化し続ける場です。
アイデアはすぐ取り入れますので、ぜひお聞かせください。`}
        </p>
      </div>
    </section>
  );
}
