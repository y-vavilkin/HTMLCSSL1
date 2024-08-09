interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  width = "100px",
  height = "40px",
  backgroundColor = "blue",
  children,
  onClick
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        width,
        height,
        backgroundColor,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};
