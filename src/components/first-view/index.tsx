import clsx from "clsx";
import Link from "next/link";
import styles from "src/components/first-view/index.module.scss";

type Props = { subscriberCount: number };

export function FirstView({ subscriberCount }: Props): JSX.Element {
  const count = Math.round(subscriberCount * 0.001) / 10;

  return (
    <section className={styles.container} style={{ backgroundImage: `url("img/hero.png")` }}>
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
        <div className={styles.itk_button}>
          <img className={styles.itk} src="/img/it-kingdom.png" alt="Logo of 'IT KINGDOM'" />
          <div className={styles.button}>
            <Link href="/">
              <a>
                <img src="/img/entry-btn.png" alt="Entry button" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .number::before {
          content: "${count}万人";
        }
      `}</style>
    </section>
  );
}
