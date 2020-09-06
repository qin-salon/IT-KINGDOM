import React from "react";
import { Headline } from "components/headline";
import styles from "./index.module.scss";

export function Price(): JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="料金" label="PRICE" className={styles.headline} baseFontSize="1rem" />
      <div>
        <div>
          <span className="sansSerif">月額 (税抜)</span>
          <h2>
            2,980
            <span>円</span>
          </h2>
        </div>
        <div className="sansSerif">
          <p>
            {`Qastなどの外部サービス利用料は含まれております。
            オフラインの勉強会を開催する場合は会場費・飲食費など、
            別途費用がかかる可能性があります。`}
          </p>
          <br />
          <b>現在テスト期間のため、100名限定で受け付けております。</b>
          <span>テストが終わり次第、再度募集を行います。</span>
        </div>
      </div>
    </section>
  );
}
