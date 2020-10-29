import clsx from "clsx";
import Image from "next/image";
import { Entry } from "src/components/entry";
import { Message } from "src/components/message";
import styles from "src/components/message-price-entry/index.module.scss";
import { Price } from "src/components/price";

export function MessagePriceEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={clsx("nextImg", styles.img)}>
        <Image src="/img/message.png" alt="Background" unsized />
      </div>
      <Message />
      <Price />
      <Entry />
    </div>
  );
}
