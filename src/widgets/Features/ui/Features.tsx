import { Circle } from "@shared/ui";
import { features } from "../const";

import classes from "./Feature.module.scss";

export const Features = () => {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <h1 className={classes.title}>
          The majority our customers do not understand their workflows.
        </h1>
        <h3 className={classes.text}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </h3>
      </div>
      <div className={classes.data}>
        {features.map((item, index) => {
          return (
            <div key={index} className={classes.item} tabIndex={0}>
              <Circle src={item.image} className={classes.image} />
              <h2 className={classes.title}>{item.title}</h2>
              <h3 className={classes.description}>{item.description}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};
