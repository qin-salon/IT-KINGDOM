import Image from "next/image";
import { Entry } from "src/components/entry";
import { Message } from "src/components/message";
import styles from "src/components/message-price-entry/index.module.scss";
import { Price } from "src/components/price";

export function MessagePriceEntry(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src="/img/message.png"
          alt="Background"
          width={2560}
          height={1418}
          style={{ width: "100%", height: "auto" }}
          loading="eager"
        />
      </div>
      <Message />
      <Price />
      <Entry />
    </div>
  );
}
