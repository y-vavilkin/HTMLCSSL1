import classes from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href="/" className={classes.container} tabIndex={0}>
      <img src="/Logo.svg" alt="Logo" />
    </a>
  );
};
