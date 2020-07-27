/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';

import Button from './Button';

import styles from '../styles/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  let position = 'top';
  if (typeof window !== 'undefined') {
    position = window.innerWidth > 959 ? 'top' : 'left';
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin"
          title="Connect on LinkedIn"
          placement={position}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/arstrel/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-linkedin'} />
            <Hidden mdUp> LinkedIn</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram"
          title="Follow me on Medium"
          placement={position}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://medium.com/@arstrel"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-medium'} />
            <Hidden mdUp> Medium</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Check my GitHub"
          placement={position}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/arstrel"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-github'} />
            <Hidden mdUp> Github</Hidden>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
