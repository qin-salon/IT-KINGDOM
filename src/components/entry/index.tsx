import Image from "next/image";
import styles from "src/components/entry/index.module.scss";
import { Headline } from "src/components/headline";
import { QIN_URL } from "src/constants";

const STEPS = [
  {
    title: "入国手続きを行う",
    body: "サロンに参加するにはページ上部または下部にある「入国手続きを行う」ボタンから行えます。その後、GitHubまたはGoogleのアカウント連携を行ってください。",
  },
  {
    title: "月会費をお支払いする",
    body: "連携後に会費をお支払いする画面に遷移しますので、指定の方法でお支払い手続きをお済ませください。もしエラーが出る場合はブラウザを変えてお試しください。",
  },
  {
    title: "各種サービスへご招待",
    body: "当サロンでは「Slack」「GitHub」を使用します。Slackは1日以内を目安に招待メールをお送りします。GitHubはサロンのマイページからGitHub連携を行い、招待メールを送ることで利用できるようになります。",
  },
  {
    title: "入国完了",
    body: "以上で入国手続きは完了です。あとはご自身の目標実現のためにスキルアップに励むも良し。ときにはコミュニティの成長のためにサロンに尽くすも良し。楽しい IT KINGDOM ライフの始まりです！",
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
