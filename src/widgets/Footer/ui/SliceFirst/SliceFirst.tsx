import { Button, Input } from "../../../../shared/ui";
import { LIGHT_PURPLE, PURPLE, SKY_PURPLE } from "../../const";

import classes from "./SliceFirst.module.scss";

export const SliceFirst = () => {
  return (
    <div className={classes.block}>
      <div className={classes.description}>
        <p className={classes.title}>Stay in the loop</p>
        <p className={classes.subtitle}>
          Join our newsletter to get top news before anyone else.
        </p>
      </div>
      <div className={classes.actions}>
        <Input
          type="email"
          placeholder="Your best email..."
          width="320px"
          height="48px"
          backgroundColor={PURPLE}
          borderColor={SKY_PURPLE}
          fontSize="16px"
          fontWeight="400"
        />
        <Button
          fontSize="16px"
          width="139px"
          height="48px"
          color={LIGHT_PURPLE}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};
