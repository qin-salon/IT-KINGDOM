import { Entry } from "src/components/entry";
import { Message } from "src/components/message";
import styles from "src/components/message-price-entry/index.module.scss";
import { Price } from "src/components/price";

export function MessagePriceEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        srcSet="img/message-520.png 520w,
          img/message-768.png 768w,
          img/message-980.png 980w,
          img/message-1200.png 1200w,
          img/message-1680.png 1680w,
          img/message-2560.png 2560w"
        src="img/message-original.png"
        sizes="(max-width:1280px) 100vw, 1280px"
        alt="Background"
      />
      {/* <img className={styles.img} src="img/message.png" alt="Background" /> */}
      <Message />
      <Price />
      <Entry />
    </div>
  );
}
