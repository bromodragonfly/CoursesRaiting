import { Tag } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";
export const Tag = ({
  children,
  className,
  size = "medium",
  color = "ghost",
  href,
  ...props
}: Tag): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.ghost]: color === "ghost",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
