import { Entry } from "src/components/entry";
import { Message } from "src/components/message";
import styles from "src/components/message-price-entry/index.module.scss";
import { Price } from "src/components/price";

export function MessagePriceEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="./img/message.png" alt="Background" />
      <img className={styles.img} src="img/message.png" alt="Background" />
      <Message />
      <Price />
      <Entry />
    </div>
  );
}
