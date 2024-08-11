import classes from "./Circle.module.css";

interface ICircleProps {
  src?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const INITIAL_VALUE = {
  WIDTH: "32px",
  HEIGHT: "32px",
  BACKGROUND_COLOR: "#ffffff",
};

export const Circle = ({
  src,
  width = INITIAL_VALUE.WIDTH,
  height = INITIAL_VALUE.HEIGHT,
  backgroundColor = INITIAL_VALUE.BACKGROUND_COLOR,
}: ICircleProps) => {
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
