import Image from "next/image";
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
    title: "プロフィールを登録する",
    body:
      "続いてプロフィールをご記入ください。イベント企画の際に、こちらでご記入いただいたプロフィール情報を参考にさせていただきます。後からでも変更が可能です。",
  },
  {
    title: "月会費をお支払いする",
    body: "プロフィール登録後に会費をお支払いする画面に遷移しますので、指定の方法でお支払い手続きをお済ませください。",
  },
  {
    title: "各種サービスへご招待",
    body:
      "当サロンでは「Qast」「Slack」「GitHub」を使用します。お支払い完了後、1日以内を目安に、各サービスへの招待をメールでお送りします。メール内のリンクから各サービスへのご登録をお済ませください。使い方はサロン内で解説いたします。",
  },
  {
    title: "入国完了",
    body:
      "以上で入国手続きは完了です。あとはご自身の目標実現のためにスキルアップに励むも良し。ときにはコミュニティの成長のためにサロンに尽くすも良し。楽しい IT KINGDOM ライフの始まりです！",
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
        <Image src="/img/entry-btn.png" alt="Entry button" width={480} height={103} loading="eager" />
      </a>
    </section>
  );
}
