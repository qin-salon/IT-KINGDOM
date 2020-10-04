import clsx from "clsx";
import { Headline } from "src/components/headline";

import styles from "./index.module.scss";

export function Price(): JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="料金" label="PRICE" className={styles.headline} />
      <div>
        <div className={styles.price}>
          <span className="sansSerif">月額 (税抜)</span>
          <h2>
            2,980
            <span>円</span>
          </h2>
        </div>
        <p className={clsx("sansSerif", styles.note)}>
          {`Qastなどの外部サービス利用料は含まれています。
            オフラインのイベントは別途費用がかかります。
            新たなプランが追加される可能性がございます。`}
        </p>
      </div>
    </section>
  );
}
