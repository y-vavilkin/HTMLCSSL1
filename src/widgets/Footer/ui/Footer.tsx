import { Button, Circle, Input, Logo } from "@shared/ui";
import {
  columns,
  GRAY,
  LIGHT_PURPLE,
  PURPLE,
  SKY_PURPLE,
  socialIcons,
} from "../const";

import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.container}>
      <img
        src="/background/endPage.svg"
        alt=""
        className={classes.backgroundImage}
      />
      <div className={classes.block1}>
        <div className={classes.description}>
          <h1 className={classes.title}>Stay in the loop</h1>
          <h2 className={classes.subtitle}>
            Join our newsletter to get top news before anyone else.
          </h2>
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
      <div className={classes.block2}>
        <section className={classes.row1}>
          <section className={classes.leftSide}>
            <Logo />
            <h3 className={classes.description}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </h3>
          </section>
          <section className={classes.rightSide}>
            {columns.map((column, index) => (
              <section key={index} className={classes.column}>
                <p className={classes.title}>{column.title}</p>
                {column.links.map((link, idx) => (
                  <a key={idx} className={classes.link} tabIndex={0}>
                    {link}
                  </a>
                ))}
              </section>
            ))}
          </section>
        </section>
        <section className={classes.row2}>
          <p>
            Made by <strong>Cruip.</strong> All rights reserved
          </p>
          <div className={classes.links}>
            {socialIcons.map((icon, index) => (
              <a href="/" tabIndex={0}>
                <Circle
                  key={index}
                  src={`icons/${icon}.svg`}
                  backgroundColor={GRAY}
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};
