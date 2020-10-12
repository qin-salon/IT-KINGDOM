import Img from "react-optimized-image";
import styles from "src/components/concept-video/index.module.scss";
import { Video } from "src/components/concept-video/video";

export function ConceptVideo(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONCEPT VIDEO</h1>
      <div className={styles.responsiveVideo}>
        <Video src="https://www.youtube.com/embed/9XVuUr4DbNU" />
      </div>
      <Img
        className={styles.smoke}
        src={require("@img/smoke.png")}
        alt="Background smoke"
        sizes={[520, 768, 980, 1200, 1680, 2560]}
        loading="lazy"
      />
    </section>
  );
}
