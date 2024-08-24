import "./Input.module.scss";

interface IInputProps {
  placeholder?: string;
  type?: string;
  className?: string;
}

export const Input = ({ type, placeholder, className }: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      tabIndex={0}
      className={className}
    />
  );
};
