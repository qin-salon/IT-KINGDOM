import type { IframeHTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import styles from "src/components/concept-video/responsive-video.module.scss";

type Props = { src: string } & IframeHTMLAttributes<HTMLIFrameElement>;

export function VideoLazyLoading({ src, ...iframeProps }: Props): React.JSX.Element {
  const el = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const target = el.current;
    const observer = new IntersectionObserver((entries, ob) => {
      if (entries[0].isIntersecting) {
        target.src = src;
        ob.unobserve(target);
      }
    });
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [src]);

  return (
    <div className={styles.responsiveVideo}>
      <iframe
        ref={el}
        title="Concept video"
        width={940}
        height={940 * (9 / 16)}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        {...iframeProps}
      />
    </div>
  );
}
