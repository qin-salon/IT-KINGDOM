import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

type Props = {
  title: string;
  label: string;
  type?: keyof React.ReactHTML;
  coloredTitle?: boolean;
  // baseFontSize?: React.CSSProperties["fontSize"];
  className?: string;
};

export function Headline({
  title,
  label,
  type = "h1",
  coloredTitle = false,
  // baseFontSize = "1.2rem",
  className,
}: Props): JSX.Element {
  return React.createElement(
    type,
    {
      // style: { fontSize: baseFontSize },
      className: clsx(className, styles.container, { [styles.coloredTitle]: coloredTitle }),
    },
    <>
      <span>{label}</span>
      <span>{title}</span>
    </>
  );
}
