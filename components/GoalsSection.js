import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupWork from "@material-ui/icons/GroupWork";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import InfoArea from "./InfoArea.js";

import styles from "../styles/goalsStyle.js";

const useStyles = makeStyles(styles);

export default function GoalsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Making Websites Stand Out</h2>
          <h5 className={classes.description}>
            I am always aspired to further my knowledge & experience in both
            front and back end software engineering technologies. Throughout my
            life, with meticulous attention to detail and methodical nature, I
            always had been fascinated with technology and had a passion for
            solving problems. Result-oriented web developer with a high desire
            to learn and use latest technology trends.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Communicate ideas"
              description="What do I care about in making a website. A few lines about this one here. A paragraph describing a feature will be enough."
              icon={GroupWork}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Dynamic and interactive"
              description="Change the content and looks based on a user's actions. A few lines about this one here. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Scalable and Secure"
              description="Can handle many users and care about privacy. A few lines about this one here. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
