import Image from "next/image";
import styles from "src/components/concept-video/index.module.scss";
import { VideoClickToPlay } from "src/components/concept-video/video-click-to-play";

export function ConceptVideo(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1>CONCEPT VIDEO</h1>
      <VideoClickToPlay
        thumbnail="/img/video-play.png"
        src="https://www.youtube.com/embed/4lfQXyv734E?modestbranding=1&controls=0&rel=0"
      />
      <div className={styles.smoke}>
        <Image src="/img/smoke.png" alt="Background" loading="eager" width={2560} height={1228} layout="responsive" />
      </div>
    </section>
  );
}
