import { WHITE, GRAY } from "../../const";

import "./Input.module.css";

interface InputProps {
  placeholder?: string;
  type?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const Input = ({
  placeholder,
  type,
  width = "100%",
  height = "40px",
  fontSize = "16px",
  fontWeight = "400",
  color = WHITE,
  borderColor = GRAY,
  backgroundColor = WHITE,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width,
        height,
        color,
        borderColor,
        backgroundColor,
        fontSize,
        fontWeight,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    />
  );
};
