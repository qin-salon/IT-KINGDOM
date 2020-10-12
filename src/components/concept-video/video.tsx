import { useEffect, useRef } from "react";

type Props = { src: string };

export function Video({ src }: Props): JSX.Element {
  const el = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const target = el.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !target.src) {
        target.src = src;
      }
    });
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [src]);

  return (
    <iframe
      ref={el}
      title="Concept video"
      width="720"
      height="405"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
}
