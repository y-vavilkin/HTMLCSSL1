import { Divider } from "../Divider/Divider";

import classes from "./UserCard.module.scss";

interface IUserCard {
  image: string;
  description: string;
  name: string;
  status: string;
}

const GRAY = "#33363A";

export const UserCard = ({ image, description, name, status }: IUserCard) => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img
          className={classes.quotationMarks}
          src="avatars/quotation-marks.svg"
        />
        <img className={classes.avatarImage} src={image} alt="avatar" />
      </div>
      <p className={classes.description}>{description}</p>
      <Divider height="1px" backgroundColor={GRAY} />
      <div className={classes.bio}>
        <span className={classes.name}>{name}</span>
        <span className={classes.divider}> / </span>
        <span className={classes.status}>{status}</span>
      </div>
    </div>
  );
};
