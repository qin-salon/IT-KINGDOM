import clsx from "clsx";
import Link from "next/link";
import styles from "src/components/first-view/index.module.scss";

const NUMBER = 6.7;

export function FirstView(): JSX.Element {
  return (
    <section className={styles.container} style={{ backgroundImage: `url("./img/hero.png")` }}>
      <div>
        <h1 className={styles.text}>
          <div className={styles.line}>
            <span>チャンネル登録者</span>
            <span className={clsx("number", styles.number)}>{NUMBER}万人</span>
            <span>の</span>
          </div>
          {/* <br /> */}
          <div className={styles.line}>
            <span>エンジニア</span>
            <span className={styles.strong}>YouTuber</span>
            <span>がおくる</span>
          </div>
          {/* <br /> */}
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
          content: "${NUMBER}万人";
        }
      `}</style>
    </section>
  );
}
