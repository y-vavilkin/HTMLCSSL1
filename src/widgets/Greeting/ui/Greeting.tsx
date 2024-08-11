import { Button } from "../../../shared";
import { GRAY, LIGHT_PURPLE, WHITE } from "../const";

import classes from "./Greeting.module.scss";

export const Greeting = () => {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <p className={classes.title}>Landing template for startups</p>
        <p className={classes.text}>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className={classes.actions}>
          <Button
            backgroundColor={LIGHT_PURPLE}
            fontSize="16px"
            width="167px"
            height="48px"
            color={WHITE}
          >
            Start free trial
          </Button>
          <Button
            backgroundColor={GRAY}
            fontSize="16px"
            width="167px"
            height="48px"
            color={WHITE}
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className={classes.videoContainer}>
        <div className={classes.video}>
          <img className={classes.background} src="images/video.png" />
          <img className={classes.play} src="icons/play.svg" />
        </div>
        <img className={classes.underVideo} src="background/underVideo.svg" />
      </div>
    </div>
  );
};
