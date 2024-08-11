import classes from "./Divider.module.css";

interface DividerProps {
  height?: string;
  backgroundColor?: string;
}

export const Divider = ({ height, backgroundColor }: DividerProps) => {
  return (
    <div
      className={classes.container}
      style={{
        height: height || "3px",
        backgroundColor: backgroundColor || "#cccccc",
      }}
    ></div>
  );
};
