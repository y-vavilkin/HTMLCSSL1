import { ListItem } from "../../../widgets/Products";

import classes from "./ItemList.module.scss";

interface IItemListProps {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  list: ListItem[];
}

export const ItemList = ({
  image,
  subtitle,
  title,
  description,
  list,
}: IItemListProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p className={classes.subtitle}>{subtitle}</p>
        <p className={classes.title}>{title}</p>
        <p className={classes.text}>{description}</p>
        <div className={classes.list}>
          {list.map((item, index) => {
            return (
              <div key={index} className={classes.item}>
                <img src="icons/complete.svg" />
                <p className={classes.description}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.right}>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};
