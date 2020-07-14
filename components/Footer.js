import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import styles from "../styles/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link href="/portfolio">
                <a className={`${classes.block} ${classes.disabledLink}`}>
                  Portfolio
                </a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/blog">
                <a className={`${classes.block} ${classes.disabledLink}`}>
                  Blog
                </a>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <MailOutlineIcon className={classes.icon} />{" "}
          <a href="mailto:me@artemio.tech" className={aClasses} target="_blank">
            me@artemio.tech
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};