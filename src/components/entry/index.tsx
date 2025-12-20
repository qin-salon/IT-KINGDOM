import Image from "next/image";
import styles from "src/components/entry/index.module.scss";
import { Headline } from "src/components/headline";
import { QIN_URL } from "src/constants";

const STEPS = [
  {
    title: "入国手続きを行う",
    body: "サロンへの参加は、「入国手続きを行う」ボタンからお進みください。その後、GoogleまたはGitHubアカウントでの連携を行っていただきます。",
  },
  {
    title: "月会費をお支払いする",
    body: "アカウント連携が完了すると、会費のお支払い画面が表示されます。案内に従って、指定の方法でお支払い手続きを行ってください。万が一エラーが表示される場合は、ブラウザを変更して再度お試しください。",
  },
  {
    title: "各種サービスへご招待",
    body: "当サロンでは、主なコミュニケーションツールとして Slack を使用しています。ご入会後、数時間以内にSlackの招待メールをお送りしますので、メールの案内に従ってご参加ください。",
  },
  {
    title: "入国完了",
    body: "以上で入国手続きは完了です。初めて入国される方には希望制で、私との 1on1ミーティングをご案内しています（カメラオフ可）。サロンのご説明を行うほか、気になる点やご相談にもお答えします。ぜひIT KINGDOMをお楽しみください。",
  },
];

export function Entry(): React.JSX.Element {
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
