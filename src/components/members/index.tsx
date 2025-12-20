import Image from "next/image";
import ippoImg from "public/img/members/ippo.jpg";
import matsuImg from "public/img/members/matsu.jpg";
import shimabuImg from "public/img/members/shimabu.jpg";
import yasuImg from "public/img/members/yasu.jpg";
import { Headline } from "src/components/headline";
import styles from "src/components/members/index.module.scss";

const MEMBERS = [
  {
    src: shimabuImg,
    name: "しまぶー",
    rank: "国王",
    introduction:
      "ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを学び、新卒でヤフーに入社。その後、株式会社GameHintを創業。",
  },
  {
    src: matsuImg,
    name: "まっつん",
    rank: "相国",
    introduction:
      "（サロン運営補助）新卒でヤフーに入社し、決済部署でインフラ・バックエンドを担当。現在はしまぶーと一緒に起業。",
  },
  {
    src: ippoImg,
    name: "いっぽ",
    rank: "左丞相",
    introduction: "（サロン運営補助）クックパッドに新卒入社。その後、有名ITベンチャーに転職。AIやデザインにも精通。",
  },
  {
    src: yasuImg,
    name: "やっさん",
    rank: "右丞相",
    introduction: "（サロン運営補助）某有名ITスタートアップのエンジニア。幅広いエンジニアリングの知識を持っている。",
  },
];

export function Members(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="運営" label="MEMBERS" className={styles.headline} />
      <ul className={styles.members}>
        {MEMBERS.map((member) => (
          <li key={member.name}>
            <div className={styles.img}>
              <Image src={member.src} alt={member.name} fill style={{ objectFit: "cover" }} />
            </div>
            <h3>{member.name}</h3>
            <h4>{member.rank}</h4>
            <p className="sansSerif">{member.introduction}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
