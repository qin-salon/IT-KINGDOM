import React from "react";
import Link from "next/link";
import { Headline } from "components/headline";
import styles from "./index.module.scss";

const STEPS = [
  {
    title: "ログインを行う",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?",
  },
  {
    title: "PayPal登録を行う",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?",
  },
  {
    title: "PayPalでお支払いを行う",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?",
  },
  {
    title: "プロフィール登録を行いましょう",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?",
  },
  {
    title: "しまぶーから連絡が来ます。",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?",
  },
];

export function Entry(): JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="入国方法" label="HOW TO ENTRY" className={styles.headline} baseFontSize="1rem" />

      <ul style={{ backgroundImage: `url("./img/ink.png")` }}>
        {STEPS.map((step, index) => (
          <li key={step.title}>
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
        <a>
          <img src="/img/entry-btn.png" />
        </a>
      </Link>
    </section>
  );
}
