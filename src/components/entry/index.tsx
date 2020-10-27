import Img from "react-optimized-image";
import styles from "src/components/entry/index.module.scss";
import { Headline } from "src/components/headline";
import { QIN_URL } from "src/constants";

const STEPS = [
  {
    title: "入国手続きを行う",
    body:
      "サロンに参加するにはページ上部または下部にある「入国手続きを行う」ボタンから行えます。GitHubまたはGoogleのアカウント連携で登録が可能です。プログラミングを学びたい方にはGitHub連携をオススメしています。",
  },
  {
    title: "月会費をお支払いする",
    body: "アカウント登録後に会費をお支払いする画面（Stripe）に遷移します。お支払い手続きをお済ませください。",
  },
  {
    title: "プロフィールを登録する",
    body:
      "続いてプロフィールをご記入ください。イベント企画の際に、こちらでご記入いただいたプロフィール情報を参考にさせていただきます。後からでも変更できます。",
  },
  {
    title: "各種サービスへご招待",
    body:
      "当サロンでは「Qast」「Microsoft Teams」という2つのサービスを使用します。プロフィールを登録後、1日後を目安にメールアドレスへ招待が届きますので、そこからご登録ください。使い方はサロン内で解説いたします。",
  },
  {
    title: "学ぼう、育てよう、楽しもう",
    body:
      "ご自身の目標実現のため、スキルアップに励むも良し！ときにはコミュニティの成長のため、サロンに尽くすも良し！さぁ、楽しい IT KINGDOM ライフの始まりです！",
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

      <a className={styles.button} target="_blank" rel="noopener noreferrer" href={QIN_URL}>
        <Img src={require("@img/entry-btn.png")} sizes={[320, 480]} alt="Entry button" loading="lazy" />
      </a>
    </section>
  );
}
