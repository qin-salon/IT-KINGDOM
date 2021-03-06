import clsx from "clsx";
import { createElement } from "react";
import styles from "src/components/headline/index.module.scss";

type Props = {
  title: string;
  label: string;
  type?: keyof React.ReactHTML;
  coloredTitle?: boolean;
  className?: string;
};

export function Headline({ title, label, type = "h1", coloredTitle = false, className }: Props): JSX.Element {
  return createElement(
    type,
    { className: clsx(className, styles.container, { [styles.coloredTitle]: coloredTitle }) },
    <>
      <span>{label}</span>
      <span>{title}</span>
    </>
  );
}
