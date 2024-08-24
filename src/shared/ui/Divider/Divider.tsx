import classes from "./Divider.module.scss";

interface IDividerProps {
  className?: string;
}

export const Divider = ({ className }: IDividerProps) => {
  return <div className={`${classes.container} ${className}`}></div>;
};
