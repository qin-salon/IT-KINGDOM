import Img from "react-optimized-image";
import { Headline } from "src/components/headline";
import styles from "src/components/members/index.module.scss";

const MEMBERS = [
  {
    src: "members/shimabu.png",
    name: "しまぶー",
    rank: "国王",
    introduction:
      "ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。",
  },
  {
    src: "members/matsu.png",
    name: "まっつん",
    rank: "相国",
    introduction:
      "神戸大学工学部卒。新卒でヤフーに入社し、決済部署でインフラ・バックエンドを担当。現在はしまぶーと一緒に起業。サロンではバックエンドを見る。",
  },
  {
    src: "members/ippo.png",
    name: "いっぽ",
    rank: "左丞相",
    introduction:
      "神戸大学工学部卒。新卒でクックパッドに入社し現在はITベンチャーに転職。アプリ・フロントエンド・デザインに秀でており、サロンでもその分野を担当。",
  },
  {
    src: "members/shimabu.png",
    name: "やっさん",
    rank: "右丞相",
    introduction:
      "神戸大学工学部卒。某有名企業の現役エンジニア。幅広いエンジニアリングの知識を持っている。サロンでは分野を問わず幅広く担当する。",
  },
];

export function Members(): JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="運営" label="MEMBERS" className={styles.headline} />
      <ul className={styles.members}>
        {MEMBERS.map((member) => (
          <li key={member.name}>
            <Img
              src={require(`@img/${member.src}`)}
              alt={member.name}
              sizes={[480, 180]}
              breakpoints={[480]}
              loading="lazy"
            />
            <h1>{member.name}</h1>
            <h2>{member.rank}</h2>
            <p className="sansSerif">{member.introduction}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
