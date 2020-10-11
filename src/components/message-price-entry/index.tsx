import Img from "react-optimized-image";
import { Entry } from "src/components/entry";
import { Message } from "src/components/message";
import styles from "src/components/message-price-entry/index.module.scss";
import { Price } from "src/components/price";

export function MessagePriceEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <Img
        className={styles.img}
        src={require("@img/message.png")}
        sizes={[520, 768, 980, 1200, 1680, 2560]}
        alt="Background"
        webp
      />
      <Message />
      <Price />
      <Entry />
    </div>
  );
}
