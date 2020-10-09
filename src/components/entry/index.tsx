import Link from "next/link";
import styles from "src/components/entry/index.module.scss";
import { Headline } from "src/components/headline";

const STEPS = [
  {
    title: "入国手続きを行う",
    body:
      "IT KINGDOMへ入国するには手続きが必要です。パスポートのようなものですね。ページ上部または下部にある「入国手続きを行う」から行えます。GitHubまたはGoogleのアカウント連携で会員登録が可能です。プログラミングを学びたい方はGitHub連携をオススメしています。",
  },
  {
    title: "住民税を支払う",
    body:
      "IT KINGDOMも国家ですから、そこに住むにはやはり住民税（上記の月額費用）がかかります。会員登録完了後に、お支払い手続きをお済ませください。お支払いはクレジットカードのみとなっております。",
  },
  {
    title: "プロフィールを登録する",
    body:
      "続いてプロフィールをご記入ください。引越し後は転入届です。イベント企画をする際にこちらでご記入いただいたプロフィール情報を参考にさせていただきます。後からでも変更できます。",
  },
  {
    title: "各種サービスへご招待",
    body:
      "当サロンでは「Qast」「Workplace」という2つのサービスを使用します。プロフィールを登録後、1日後を目安にメールアドレスへ招待が届きますので、そこからご登録ください。使い方はサロン内で解説いたします。",
  },
  {
    title: "学ぼう、育てよう、楽しもう",
    body:
      "自身の目標実現のため鍛錬に励むも良し！ときには国力向上のためサロンに尽くすも良し！さぁ、楽しい IT KINGDOM ライフの始まりです！",
  },
];

export function Entry(): JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="入国方法" label="HOW TO ENTRY" className={styles.headline} />

      <ul style={{ backgroundImage: `url("img/ink.png")` }}>
        {STEPS.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <div>
              <span>STEP</span>
              <span>{index + 1}</span>
            </div>
            <h2>{step.title}</h2>
            <p className="sansSerif">{step.body}</p>
          </li>
        ))}
      </ul>

      <Link href="/">
        <a className={styles.button}>
          <img src="/img/entry-btn.png" alt="Entry button" loading="lazy" />
        </a>
      </Link>
    </section>
  );
}
