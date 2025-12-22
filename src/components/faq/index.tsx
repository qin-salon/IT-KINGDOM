import styles from "src/components/faq/index.module.scss";
import { CONTACT_URL } from "src/constants";

const FAQs = [
  {
    label: "サロンの内容について",
    items: [
      {
        question: `どのような方が対象ですか？`,
        answer: `IT業界に興味のある方、AIやプログラミングに興味のある方にオススメしております。`,
      },
      {
        question: `プログラミング初心者ですが参加可能ですか？`,
        answer: `もちろん大歓迎です。初心者から経験者まで誰でもご参加いただけます。`,
      },
      {
        question: `参加したらプログラミングができるようになりますか？`,
        answer: `参加しただけでプログラミングができるようになるものではございません。自主学習と併用してご活用いただくことをオススメしています。当サロンでは「一人だとモチベーションが維持できない」「詰まったときに答えが見つからない」といったプログラミング学習における課題を解決できるための仕組みを用意しております。`,
      },
      {
        question: `オフラインのイベントもありますか？`,
        answer: `開催頻度は多くありませんが、定期的にオフラインイベントも開催しております。しまぶーの居住地`,
      },
      {
        question: `マンガ『キングダム』と関係ありますか？`,
        answer: `IT KINGDOMは原泰久先生の作品『キングダム』とは一切関係がない非公式のサービスです。オマージュとして設定を一部拝借しております。`,
      },
    ],
  },
  {
    label: "お支払いやアカウントについて",
    items: [
      {
        question: `どのような支払い方法がありますか？`,
        answer: `クレジットカードのみとなっております。`,
      },
      {
        question: `入会後、初回料金はいつ決済されますか？`,
        answer: `入会手続き時に決済が行われ、その後、1ヶ月ごとに決済が行われます。いつ入会しても条件は同じですので、1日に入会する必要はございません。`,
      },
      {
        question: `領収書はどこで発行できますか？`,
        answer: `毎月の決済のタイミングで送られるメールから領収書をダウンロードできます。`,
      },
      {
        question: `退会方法を教えてください`,
        answer: `マイページより退会手続きが行えます。`,
      },
      {
        question: `キャンセルしたいです`,
        answer: `申し訳ございませんが原則キャンセルは承っておりません。参加後に満足いただけなかった場合は退会をお願いしております。`,
      },
    ],
  },
];

export function Faq(): React.JSX.Element {
  return (
    <>
      <h1 className={styles.title}>よくある質問</h1>
      <ul>
        {FAQs.map(({ label, items }) => (
          <li key={label} className={styles.category}>
            <h2>{label}</h2>
            <ul>
              {items.map(({ question, answer }) => (
                <li key={question} className={styles.qa}>
                  <h3>{`Q ${question}`}</h3>
                  <p>{answer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        その他ご不明点がございましたら、
        <a target="_blank" rel="noopener noreferrer" href={CONTACT_URL}>
          お問い合わせ
        </a>
        よりご連絡ください。
      </p>
    </>
  );
}
