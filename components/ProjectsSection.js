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
                  yoga studio to better serve their students with unique daily
                  routine builder.
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
                  Some details about this project. Who is it for and what is up.
                  Some details about this project. Who is it for and what is up.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button round color="primary" className={classes.margin5}>
                  See live
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="/images/fun.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                You got more projects, right?
                <br />
                <small className={classes.smallTitle}>Yeah, for sure</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Some details about this project. Who is it for and what is up.
                  Some details about this project. Who is it for and what is up.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button round color="primary" className={classes.margin5}>
                  See live
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
