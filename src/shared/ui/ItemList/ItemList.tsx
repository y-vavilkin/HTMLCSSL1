import classes from "./ItemList.module.scss";

interface IItemListProps<T> {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  list: T[];
}

export const ItemList = <T extends { text: string }>({
  image,
  subtitle,
  title,
  description,
  list,
}: IItemListProps<T>) => {
  return (
    <div className={classes.container} tabIndex={0}>
      <section className={classes.left}>
        <h4 className={classes.subtitle}>{subtitle}</h4>
        <h1 className={classes.title}>{title}</h1>
        <h2 className={classes.text}>{description}</h2>
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
      </section>
      <section className={classes.right}>
        <img src={image} alt="image" />
      </section>
    </div>
  );
};
