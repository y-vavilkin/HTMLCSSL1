import { Button, Burger, Logo } from "@shared/ui";
import { LIGHT_PURPLE } from "../const";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.container}>
      <Logo />
      <section className={classes.actionsDesktop}>
        <Button
          width="96px"
          height="40px"
          color={LIGHT_PURPLE}
          isTransparent={true}
        >
          Sign in
        </Button>
        <Button
          backgroundColor={LIGHT_PURPLE}
          width="96px"
          height="40px"
          color="white"
        >
          Sign up
        </Button>
      </section>
      <Burger />
    </header>
  );
};
