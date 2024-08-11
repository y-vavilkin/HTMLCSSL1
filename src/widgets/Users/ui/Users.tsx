import { UserCard } from "@shared/ui";
import { data } from "../const";

import classes from "./Users.module.scss";

export const Users = () => {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <p className={classes.title}>Don't take our word for it</p>
        <p className={classes.subtitle}>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
      </div>
      <div className={classes.users}>
        {data.map((user, index) => {
          return (
            <UserCard
              key={index}
              image={user.image}
              description={user.description}
              name={user.name}
              status={user.status}
            />
          );
        })}
      </div>
    </div>
  );
};
