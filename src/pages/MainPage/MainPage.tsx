import { Header, Greeting, Footer, Features } from "../../widgets";

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
        <Footer />
      </div>
    </div>
  );
};
