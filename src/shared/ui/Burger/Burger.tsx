import classes from "./Burger.module.css";

export const Burger = () => {
  return (
    <button className={classes.burger}>
      <img src="icons/Burger.svg" alt="action" />
    </button>
  );
};
