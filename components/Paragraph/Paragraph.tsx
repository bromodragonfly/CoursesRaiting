import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";
export const Paragraph = ({
  children,
  size = "medium",
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.p_medium]: size === "medium",
        [styles.p_large]: size === "large",
        [styles.p_small]: size === "small",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
