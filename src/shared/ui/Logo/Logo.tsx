import classes from "./Logo.module.css";

export const Logo = () => {
  return (
    <a href="/" className={classes.container}>
      <img src="/Logo.svg" alt="Logo" />
    </a>
  );
};
