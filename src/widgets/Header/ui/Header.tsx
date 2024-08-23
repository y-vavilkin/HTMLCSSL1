import { Button, Burger, Logo } from "@shared/ui";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.container}>
      <Logo />
      <section className={classes.actionsDesktop}>
        <Button className={classes.signIn}>Sign in</Button>
        <Button className={classes.signUp}>Sign up</Button>
      </section>
      <Burger />
    </header>
  );
};
