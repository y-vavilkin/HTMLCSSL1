import classes from "./Divider.module.css";

interface IDividerProps {
  height?: string;
  backgroundColor?: string;
}

export const Divider = ({
  height,
  backgroundColor,
}: IDividerProps) => {
  return (
    <div
      className={classes.container}
      style={{
        height,
        backgroundColor,
      }}
    ></div>
  );
};
