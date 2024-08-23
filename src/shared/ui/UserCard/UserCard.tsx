import { Divider } from "../Divider/Divider";

import classes from "./UserCard.module.scss";

interface IUserCard {
  image: string;
  description: string;
  name: string;
  status: string;
}

export const UserCard = ({ image, description, name, status }: IUserCard) => {
  return (
    <div className={classes.container} tabIndex={0}>
      <section className={classes.avatar}>
        <img
          className={classes.quotationMarks}
          src="avatars/quotation-marks.svg"
        />
        <img className={classes.avatarImage} src={image} alt="avatar" />
      </section>
      <p className={classes.description}>{description}</p>
      <Divider className={classes.divider} />
      <section className={classes.bio}>
        <span className={classes.name}>{name}</span>
        <span className={classes.dividerSymbol}> / </span>
        <span className={classes.status}>{status}</span>
      </section>
    </div>
  );
};
