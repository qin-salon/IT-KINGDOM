import { Headline } from "src/components/headline";

import styles from "./index.module.scss";

const MEMBERS = [
  {
    src: "/img/knight.png",
    name: "しまぶー",
    rank: "国王",
    introduction:
      "神戸大学経営学部卒。文系から独学でプログラミングを勉強し、新卒でヤフー株式会社に入社。新規事業部署でフロントエンドを担当した後に、知り合いづてで転職。フルリモートで働きながら様々な案件開発を行う。2019年に投資家から資金調達を行い起業。現在は新規のプロダクト開発に励んでいる。",
  },
  {
    src: "/img/knight.png",
    name: "一歩",
    rank: "左丞相",
    introduction:
      "新卒でクックパッドに入社し、現在はITベンチャーに転職して勤務中。アプリ開発・フロントエンド・デザインに秀でており、当コミュニティでもその分野を担当。",
  },
  {
    src: "/img/knight.png",
    name: "まっつん",
    rank: "相国",
    introduction:
      "新卒でヤフーに入社し、決済の部署でインフラ・バックエンドを担当。現在はしまぶーと一緒に起業。当コミュニティではバックエンドの取りまとめを行う。",
  },
  {
    src: "/img/knight.png",
    name: "やっさん",
    rank: "右丞相",
    introduction:
      "現役ヤフーエンジニア。幅広いエンジニアリング知識を持っている。聞けばだいたいの答えは返ってくるので、当コミュニティでは分野問わず幅広く担当する。",
  },
];

export function Members(): JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="陣営" label="MEMBERS" className={styles.headline} />
      <ul>
        {MEMBERS.map((member) => (
          <li key={member.name}>
            <img src={member.src} alt={`${member.name}'s photograph`} loading="lazy" />
            <h1>{member.name}</h1>
            <h2>{member.rank}</h2>
            <p className="sansSerif">{member.introduction}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
