import classes from "./Button.module.css";

interface ButtonProps {
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

export const Button = ({
  width = "100px",
  height = "40px",
  backgroundColor = "white",
  color = "black",
  isTransparent = false,
  fontSize = "16px",
  fontWeight = "500",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      style={{
        width,
        height,
        backgroundColor: isTransparent ? "transparent" : backgroundColor,
        color,
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
        fontSize,
        fontWeight,
      }}
    >
      {children}
    </button>
  );
};
