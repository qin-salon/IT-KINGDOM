import styles from "./index.module.scss";

export function ConceptVideo(): JSX.Element {
  return (
    <section className={styles.container} style={{ backgroundImage: `url("./img/smoke.jpg")` }}>
      <h1>CONCEPT MOVIE</h1>
      <div className={styles.responsiveVideo}>
        <iframe
          title="Concept movie"
          width="720"
          height="405"
          src="https://www.youtube.com/embed/9XVuUr4DbNU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
