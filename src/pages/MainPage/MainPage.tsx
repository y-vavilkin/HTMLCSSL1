import { Header, Greeting, Footer, Products, Features, Users } from "@widgets";

import classes from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <section className={classes.page}>
      <div className={classes.content}>
        <img
          src="/background/startPage.svg"
          className={classes.backgroundImage}
        />
        <Header />
        <Greeting />
        <Features />
        <Products />
        <Users />
        <Footer />
      </div>
    </section>
  );
};
