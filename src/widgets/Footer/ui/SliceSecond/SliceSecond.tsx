import { Logo, Circle } from "../../../../shared/ui";
import { GRAY } from "../../const";

import classes from "./SliceSecond.module.scss";

export const SliceSecond = () => {
  return (
    <div className={classes.block}>
      <div className={classes.row1}>
        <div className={classes.leftSide}>
          <Logo />
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.column}>
            <p className={classes.title}>Products</p>
            <a className={classes.link}>Web Studio</a>
            <a className={classes.link}>DynamicBox Flex</a>
            <a className={classes.link}>Programming Forms</a>
          </div>
          <div className={classes.column}>
            <p className={classes.title}>Resources</p>
            <a className={classes.link}>Nostrud exercitation</a>
            <a className={classes.link}>Visual mockups</a>
            <a className={classes.link}>Nostrud exercitation</a>
            <a className={classes.link}>Visual mockups</a>
            <a className={classes.link}>Nostrud exercitation</a>
          </div>
          <div className={classes.column}>
            <p className={classes.title}>Company</p>
            <a className={classes.link}>Consectetur adipiscing</a>
            <a className={classes.link}>Labore et dolore</a>
            <a className={classes.link}>Consectetur adipiscing</a>
            <a className={classes.link}>Labore et dolore</a>
            <a className={classes.link}>Consectetur adipiscing</a>
          </div>
        </div>
      </div>
      <div className={classes.row2}>
        <p>
          Made by <strong>Cruip.</strong> All right reserved
        </p>
        <div className={classes.links}>
          <Circle src={"icons/twitter.svg"} backgroundColor={GRAY} />
          <Circle src={"icons/github.svg"} backgroundColor={GRAY} />
          <Circle src={"icons/facebook.svg"} backgroundColor={GRAY} />
          <Circle src={"icons/instagram.svg"} backgroundColor={GRAY} />
          <Circle src={"icons/linkedin.svg"} backgroundColor={GRAY} />
        </div>
      </div>
    </div>
  );
};
