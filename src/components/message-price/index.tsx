import { Message } from "src/components/message";
import styles from "src/components/message-price/index.module.scss";
import { Price } from "src/components/price";

export function MessagePrice(): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="./img/message.png" alt="Background" />
      <Message />
      <Price />
    </div>
  );
}
