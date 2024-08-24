import classes from "./Circle.module.scss";

interface ICircleProps {
  src?: string;
  className?: string;
}

export const Circle = ({ src, className }: ICircleProps) => {
  return (
    <div className={`${classes.circle} ${className}`}>
      <img src={src} alt="image" />
    </div>
  );
};
