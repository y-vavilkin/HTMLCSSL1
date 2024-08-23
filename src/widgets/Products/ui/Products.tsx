import { ItemList, Divider } from "@shared/ui";
import { data } from "../const";

import classes from "./Products.module.scss";

export const Products = () => {
  return (
    <section className={classes.container}>
      <Divider className={classes.divider} />
      <section className={classes.start}>
        <p className={classes.tag}>Reach goals that matter</p>
        <h1 className={classes.title}>One product, unlimited solutions</h1>
        <h3 className={classes.text}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </h3>
      </section>
      <section className={classes.content}>
        {data.map((item, index) => {
          return (
            <ItemList
              key={index}
              image={item.image}
              subtitle={item.subtitle}
              title={item.title}
              description={item.description}
              list={item.list}
            />
          );
        })}
      </section>
      <Divider className={classes.divider} />
    </section>
  );
};
