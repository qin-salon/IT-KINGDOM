/* eslint-disable jsx-a11y/media-has-caption */
import type { IframeHTMLAttributes } from "react";
import { useState } from "react";
import videoStyles from "src/components/concept-video/responsive-video.module.scss";
import styles from "src/components/concept-video/video-click-to-play.module.scss";

type Props = {
  src: string;
  thumbnail: string;
} & IframeHTMLAttributes<HTMLIFrameElement>;

export function VideoClickToPlay({ src, thumbnail, ...iframeProps }: Props): JSX.Element {
  const [clicked, setClicked] = useState(false);

  return clicked ? (
    <div className={videoStyles.responsiveVideo}>
      {src.includes("youtu") ? (
        <iframe
          src={`${src}&autoplay=1`}
          title="Concept video"
          width={940}
          height={940 * (9 / 16)}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          {...iframeProps}
        />
      ) : (
        <video autoPlay controls disablePictureInPicture controlsList="nodownload">
          <source src={src} />
        </video>
      )}
    </div>
  ) : (
    <button
      className={styles.button}
      onClick={() => {
        setClicked(true);
      }}
    >
      <img className={styles.thumbnail} width={940} height={940 * (9 / 16)} src={thumbnail} alt="Click to play video" />
    </button>
  );
}
