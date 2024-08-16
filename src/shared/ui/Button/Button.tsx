import classes from "./Button.module.css";

interface IButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  isTransparent?: boolean;
  fontSize?: string;
  fontWeight?: string;
}

const INITIAL_VALUE = {
  WIDTH: "100px",
  HEIGHT: "40px",
  BACKGROUND_COLOR: "white",
  COLOR: "black",
  IS_TRANSPARENT: false,
  FONT_SIZE: "16px",
  FONT_WEIGHT: "400",
  TRANSPARENT: "transparent",
};

export const Button = ({
  width = INITIAL_VALUE.WIDTH,
  height = INITIAL_VALUE.HEIGHT,
  fontSize = INITIAL_VALUE.FONT_SIZE,
  fontWeight = INITIAL_VALUE.FONT_WEIGHT,
  color = INITIAL_VALUE.COLOR,
  backgroundColor = INITIAL_VALUE.BACKGROUND_COLOR,
  isTransparent = INITIAL_VALUE.IS_TRANSPARENT,
  children,
  onClick,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      tabIndex={0}
      style={{
        width,
        height,
        backgroundColor: isTransparent
          ? INITIAL_VALUE.TRANSPARENT
          : backgroundColor,
        color,
        fontSize,
        fontWeight,
      }}
    >
      {children}
    </button>
  );
};
