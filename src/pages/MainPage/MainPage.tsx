import { Header, Greeting, Footer, Features, Users } from "../../widgets";

import classes from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <img
          src="/background/startPage.svg"
          alt=""
          className={classes.backgroundImage}
        />
        <Header />
        <Greeting />
        <Features />
        <Users />
        <Footer />
      </div>
    </div>
  );
};
