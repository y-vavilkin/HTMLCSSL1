import { Circle } from "../../../shared/ui";
import { data, LIGHT_PURPLE } from "../const";

import classes from "./Feature.module.scss";

export const Features = () => {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <p className={classes.title}>
          The majority our customers do not understand their workflows.
        </p>
        <p className={classes.text}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={classes.data}>
        {data.map((item) => {
          return (
            <div className={classes.item}>
              <Circle
                src={item.image}
                backgroundColor={LIGHT_PURPLE}
                width="64px"
                height="64px"
              />
              <p className={classes.title}>{item.title}</p>
              <p className={classes.description}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
