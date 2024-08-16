import "./Input.module.css";

interface IInputProps {
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

const INITIAL_VALUE = {
  WHITE: "#ffffff",
  GRAY: "#33363a",
}

export const Input = ({
  type,
  placeholder,
  width,
  height,
  fontSize,
  fontWeight,
  color = INITIAL_VALUE.WHITE,
  borderColor = INITIAL_VALUE.GRAY,
  backgroundColor = INITIAL_VALUE.WHITE,
}: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      tabIndex={0}
      style={{
        width,
        height,
        color,
        borderColor,
        backgroundColor,
        fontSize,
        fontWeight,
      }}
    />
  );
};
