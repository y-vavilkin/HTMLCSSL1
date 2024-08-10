import { Button, Burger, Logo } from "../../../shared";
import { LIGHT_PURPLE } from "../const";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.actionsDesktop}>
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
      </div>
      <Burger />
    </div>
  );
};
