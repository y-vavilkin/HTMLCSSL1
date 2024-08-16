import { UserCard } from "@shared/ui";
import { data } from "../const";

import classes from "./Users.module.scss";

export const Users = () => {
  return (
    <section className={classes.container}>
      <section className={classes.description}>
        <h1 className={classes.title}>Don't take our word for it</h1>
        <h3 className={classes.subtitle}>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </h3>
      </section>
      <section className={classes.users}>
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
      </section>
    </section>
  );
};
