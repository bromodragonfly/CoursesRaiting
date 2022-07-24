import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import StarIcon from "./Star.svg";
import { useEffect, useState, KeyboardEvent } from "react";

export const Raiting = ({
  isEditible = false,
  raiting,
  setRaiting,
  ...props
}: RaitingProps): JSX.Element => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    consturctRaiting(raiting);
  }, [raiting]);

  const consturctRaiting = (currentRaiting: number) => {
    const updatedArray = raitingArray.map((r: JSX.Element, item: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: item < currentRaiting,
            [styles.editable]: isEditible,
          })}
          onMouseEnter={() => changeDisplay(item + 1)}
          onMouseLeave={() => changeDisplay(raiting)}
          onClick={() => onClick(item + 1)}
        >
          <StarIcon
            tabIndex={isEditible ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGElement>) =>
              isEditible && handleSpace(item + 1, event)
            }
          />
        </span>
      );
    });
    setRaitingArray(updatedArray);
  };
  const changeDisplay = (i: number) => {
    if (!isEditible) return;
    consturctRaiting(i);
  };
  const onClick = (i: number) => {
    if (!isEditible || !setRaiting) return;
    setRaiting(i);
  };
  const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
    if (event.code !== "Space" || !setRaiting) {
      return;
    }
    setRaiting(i);
  };

  return (
    <div {...props}>
      {raitingArray.map((r, item) => (
        <span key={item}>{r}</span>
      ))}
    </div>
  );
};
