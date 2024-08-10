import { Button, Burger, Logo } from "../../shared";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.actionsDesktop}>
        <Button width="96px" height="40px" color="#5D5DFF" isTransparent={true}>
          Sign in
        </Button>
        <Button
          backgroundColor="#5D5DFF"
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
