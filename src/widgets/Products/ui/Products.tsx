import { ItemList, Divider } from "../../../shared/ui";
import { data, GRAY } from "../const";

import classes from "./Products.module.scss";

export const Products = () => {
  return (
    <>
      <Divider backgroundColor={GRAY} height="1px" />
      <div className={classes.container}>
        <div className={classes.start}>
          <p className={classes.tag}>Reach goals that matter</p>
          <p className={classes.title}>One product, unlimited solutions</p>
          <p className={classes.text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className={classes.content}>
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
        </div>
      </div>
      <Divider backgroundColor={GRAY} height="1px" />
    </>
  );
};
