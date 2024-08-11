import { Header, Greeting, Footer, Features, Users } from "../../widgets";
import { Products } from "../../widgets/Products/ui/Products";

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
        <Products />
        <Users />
        <Footer />
      </div>
    </div>
  );
};
