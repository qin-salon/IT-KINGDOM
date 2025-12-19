import clsx from "clsx";
import Image from "next/image";
import styles from "src/components/first-view/index.module.scss";
import { QIN_URL } from "src/constants";

type Props = { subscriberCount: number };

export function FirstView({ subscriberCount }: Props): React.JSX.Element {
  const count = Math.round(subscriberCount * 0.001) / 10;

  return (
    <section className={styles.container}>
      <picture className={styles.img}>
        <source
          type="image/webp"
          media="(max-width:768px)"
          srcSet="
            img/hero/sp-400.webp 400w,
            img/hero/sp-500.webp 500w,
            img/hero/sp-600.webp 600w,
            img/hero/sp-768.webp 768w,
            img/hero/sp.webp"
        />
        <source
          type="image/webp"
          srcSet="
            img/hero/pc-980.webp 980w,
            img/hero/pc-1200.webp 1200w,
            img/hero/pc-1680.webp 1680w,
            img/hero/pc-2000.webp 2000w,
            img/hero/pc-2560.webp 2560w,
            img/hero/pc.webp"
        />
        <source
          type="image/png"
          media="(max-width:768px)"
          srcSet="
            img/hero/sp-400.png 400w,
            img/hero/sp-500.png 500w,
            img/hero/sp-600.png 600w,
            img/hero/sp-768.png 768w,
            img/hero/sp.png"
        />
        <source
          type="image/png"
          srcSet="
            img/hero/pc-980.png 980w,
            img/hero/pc-1200.png 1200w,
            img/hero/pc-1680.png 1680w,
            img/hero/pc-2000.png 2000w,
            img/hero/pc-2560.png 2560w,
            img/hero/pc.png"
        />
        {}
        <img src="img/hero/pc.png" alt="King shimabu and soldiers" />
      </picture>

      <div>
        <h1 className={styles.text}>
          <div className={styles.line}>
            <span>チャンネル登録者</span>
            <span className={clsx("number", styles.number)}>{count}万人</span>
            <span>の</span>
          </div>
          <div className={styles.line}>
            <span>エンジニア</span>
            <span className={styles.strong}>YouTuber</span>
            <span>がおくる</span>
          </div>
          <div className={styles.line}>
            <span className={styles.strong}>オンラインサロン</span>
          </div>
        </h1>

        <div className={styles.itk}>
          <Image
            alt="IT KINGDOM"
            src="/img/hero/it-kingdom.png"
            loading="eager"
            sizes="(min-width: 1200px) 1200px"
            width={2144}
            height={959}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <a target="_blank" rel="noopener noreferrer" href={QIN_URL} className={styles.button}>
          <Image src="/img/entry-btn.png" alt="Entry button" loading="eager" width={480} height={103} priority />
        </a>
      </div>

      {}
      {/* @ts-ignore */}
      <style jsx="true">{`
        .number::before {
          content: "${count}万人";
        }
      `}</style>
    </section>
  );
}
