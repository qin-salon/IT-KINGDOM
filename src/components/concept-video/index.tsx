import Image from "next/image";
import styles from "src/components/concept-video/index.module.scss";
import { Video } from "src/components/concept-video/video";

export function ConceptVideo(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONCEPT VIDEO</h1>
      <div className={styles.responsiveVideo}>
        <Video src="https://www.youtube.com/embed/9XVuUr4DbNU" />
      </div>
      <div className={styles.smoke}>
        <Image src="/img/smoke.png" alt="Background" loading="eager" width={2560} height={1228} layout="responsive" />
      </div>
    </section>
  );
}
