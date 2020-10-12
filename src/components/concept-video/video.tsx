export default function Video(): JSX.Element {
  return (
    <iframe
      title="Concept video"
      width="720"
      height="405"
      src="https://www.youtube.com/embed/9XVuUr4DbNU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
}
