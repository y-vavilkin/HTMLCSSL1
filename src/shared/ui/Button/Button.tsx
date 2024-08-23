import classes from "./Button.module.scss";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ className, children, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${className}`}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
