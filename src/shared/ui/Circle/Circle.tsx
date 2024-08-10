import { WHITE } from "../../const";

import classes from "./Circle.module.css";

interface CircleProps {
  src?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export const Circle = ({
  src,
  width = "32px",
  height = "32px",
  backgroundColor = WHITE,
}: CircleProps) => {
  return (
    <div
      className={classes.circle}
      style={{
        width,
        height,
        backgroundColor,
      }}
    >
      <img src={src} alt="image" />
    </div>
  );
};
