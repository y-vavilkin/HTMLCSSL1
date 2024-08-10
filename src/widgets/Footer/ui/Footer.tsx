import classes from "./Footer.module.scss";
import { SliceFirst } from "./SliceFirst/SliceFirst";
import { SliceSecond } from "./SliceSecond/SliceSecond";

export const Footer = () => {
  return (
    <div className={classes.container}>
      <img
        src="/background/endPage.svg"
        alt=""
        className={classes.backgroundImage}
      />
      <SliceFirst />
      <SliceSecond />
    </div>
  );
};
