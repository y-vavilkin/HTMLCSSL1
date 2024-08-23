import { Button } from "@shared/ui";

import classes from "./Greeting.module.scss";

export const Greeting = () => {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <h1 className={classes.title}>Landing template for startups</h1>
        <h3 className={classes.text}>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </h3>
        <div className={classes.actions}>
          <Button className={classes.freeTrial}>Start free trial</Button>
          <Button className={classes.learnMore}>Learn more</Button>
        </div>
      </div>
      <div className={classes.videoContainer}>
        <div className={classes.video}>
          <img className={classes.background} src="images/video.png" />
          <img className={classes.play} src="icons/play.svg" tabIndex={0} />
        </div>
        <img className={classes.underVideo} src="background/underVideo.svg" />
      </div>
    </section>
  );
};
