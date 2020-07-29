import React from 'react';
import Link from 'next/link';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import Button from './Button';
import Card from './Card/Card';
import CardBody from './Card/CardBody';
import CardFooter from './Card/CardFooter';

import styles from '../styles/projectsStyle';

const useStyles = makeStyles(styles);

export default function ProjectsSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Some of my projects</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/images/yoga.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kukee-bliss Yoga
                <br />
                <small className={classes.smallTitle}>Small yoga studio</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Straight out of the Ironhack coding bootcamp, this project
                  leverages the power of MERN stack to enable South Carolina
                  yoga studio to better serve their students.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Link href="/projects/KukkeeYoga">
                  <Button round color="primary" className={classes.margin5}>
                    See Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="/images/bar.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Teep 100%
                <br />
                <small className={classes.smallTitle}>
                  Bar Tips Calculator
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  After a long fast-paced shift in a restaurant or a bar, food
                  and beverage employees gather to calculate closing shift
                  paperwork. Teep 100% is the way to streamline this process and
                  track earnings in one place.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Link href="/projects/Teep">
                  <Button round color="primary" className={classes.margin5}>
                    See Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="/images/fun.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Budgety
                <br />
                <small className={classes.smallTitle}>
                  Simple way to do your budget
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  A small project with a mighty architecture. This pure vanilla
                  JavaScript project is built using MVC pattern and separation
                  of concerns for Budget, App and UI logic.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Link href="/projects/Budgety">
                  <Button round color="primary" className={classes.margin5}>
                    See Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
