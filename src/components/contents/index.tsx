import styles from "src/components/contents/index.module.scss";
import { Headline } from "src/components/headline";

const ITEMS = [
  {
    src: "/img/contents/programming.png",
    bgSrc: "/img/contents/cloud1.png",
    title: "プロダクト開発",
    body:
      "私含め現役エンジニアが新規事業のプロジェクトをたてます。プロジェクトのコードはみんなが読めるようにGitHubのチーム機能を使用し、適宜コードの解説も行います。また開発ができるメンバーには実際にコードを書いていただく予定で、チーム開発の実戦経験にもなります。",
  },
  {
    src: "/img/contents/qast.png",
    title: "気軽に質問",
    body:
      "Qastというサービスを使用します。Qastには匿名で質問を行う機能があり「何度も質問するのは気が引ける」「初歩的すぎて聞くのが恥ずかしい」という心配も不要です。また誰でも回答でき、回答していくことでポイントが溜まる仕組みがあります。国力向上のため、みんなで教え合いましょう。",
  },
  {
    src: "/img/contents/blog.png",
    bgSrc: "/img/contents/cloud2.png",
    title: "ブログ & アウトプット",
    body:
      "Qastにはブログ機能も備わっています。誰でもブログを書くことができるので積極的に学びをアウトプットしましょう。外部だと間違いを指摘されて少し怖いですが当サロンはみんなが優しく教えてくれます。また私含め現役エンジニアもブログを執筆予定です。",
  },
  {
    src: "/img/contents/news.png",
    title: "IT業界研究",
    body:
      "優れたプロダクトを作るためにはIT業界のトレンドを知る必要があります。私がニュースをサロン内でシェアしたり時事ネタを解説します。また就職に必要なIT企業の研究や情報共有も行います。",
  },
  {
    src: "/img/contents/community.png",
    bgSrc: "/img/contents/cloud3.png",
    title: "楽しめるコミュニティ",
    body:
      "ただ学ぶだけではなく楽しめるようなサロンにします。Workplaceというサービスを用いて交流の場を設けます。一緒に勉強するもくもく会、オンライン飲み会、オフラインでの講座などを予定しています。関東だけでなく各都市でも定期的に行いたいと考えています。",
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
            <img src={src} alt={title} loading="lazy" />
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
          {`当サロンは最高のプロダクトを生み出すために常に進化していく必要があります。
          サロンのあり方を一緒に考えみんなで成長させていくことが重要です。
          ここに書いてあること以外にもおもしろいことは積極的にやりましょう。`}
        </p>
      </div>
    </section>
  );
}
