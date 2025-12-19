import clsx from "clsx";
import { Headline } from "src/components/headline";
import styles from "src/components/price/index.module.scss";

export function Price(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <Headline title="料金" label="PRICE" className={styles.headline} />
      <div>
        <div className={styles.price}>
          <span className="sansSerif">月額（税込3,278円）</span>
          <h2>
            2,980
            <span>円</span>
          </h2>
        </div>
        <p className={clsx("sansSerif", styles.note)}>
          {`外部のサービス利用料はすべて含まれています。
            領収書は毎月メールでお届けいたします。`}
        </p>
      </div>
    </section>
  );
}
