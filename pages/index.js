import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Button from "../components/Button.js";
import GridContainer from "../components/GridContainer.js";
import GridItem from "../components/GridItem.js";
import HeaderLinks from "../components/HeaderLinks.js";
import Parallax from "../components/Parallax.js";
import GoalsSection from "../components/GoalsSection.js";
import ProjectsSection from "../components/ProjectsSection.js";

import styles from "../styles/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Artemio.tech"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src="/images/profile.png"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Artem Streltsov</h3>
                    <h6>Full Stack Web Developer</h6>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.twitter.com/arstrel/"
                      target="_blank"
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.instagram.com/timberto/"
                      target="_blank"
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.facebook.com/arstrels"
                      target="_blank"
                    >
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                JavaScript, MongoDB, MySQL, Express.js, GraphQL, Apollo,
                React.js, Next.js, Node.js, GraphQL, HTML5, CSS/SCSS, Responsive
                Design, Git, GitHub, Bitbucket, Jira, Agile workflow
              </p>
            </div>
            <GoalsSection />
            <ProjectsSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
