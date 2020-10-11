import Img from "react-optimized-image";
import styles from "src/components/concept-video/index.module.scss";

export function ConceptVideo(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONCEPT VIDEO</h1>
      <div className={styles.responsiveVideo}>
        <iframe
          title="Concept video"
          width="720"
          height="405"
          src="https://www.youtube.com/embed/9XVuUr4DbNU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
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
