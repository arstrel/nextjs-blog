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
import Quote from "../components/Quote.js";

import stylesProfile from "../styles/profilePage.js";
import stylesGoals from "../styles/goalsStyle.js";

const useStyles = makeStyles({ ...stylesGoals, ...stylesProfile });

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
                    <h2 className={classes.title}>Artem Streltsov</h2>
                    <h5>Full Stack Web Developer</h5>
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
              <Quote
                text="The noblest pleasure is the joy of understanding."
                author="Leonardo da Vinci"
              />
              <div className={classes.section}>
                I have experience in using the following technologies:
                <GridContainer className={classes.techItemsContainer}>
                  <GridItem className={classes.techListItem}>JavaScript</GridItem>
                  <GridItem className={classes.techListItem}>React.js</GridItem>
                  <GridItem className={classes.techListItem}>Next.js</GridItem>
                  <GridItem className={classes.techListItem}>Node.js</GridItem>
                  <GridItem className={classes.techListItem}>Express.js</GridItem>
                  <GridItem className={classes.techListItem}>Apollo</GridItem>
                  <GridItem className={classes.techListItem}>GraphQL</GridItem>
                  <GridItem className={classes.techListItem}>MongoDB/Mongoose</GridItem>
                  <GridItem className={classes.techListItem}>MySQL/Sequelize</GridItem>
                  <GridItem className={classes.techListItem}>HTML5</GridItem>
                  <GridItem className={classes.techListItem}>CSS/SCSS</GridItem>
                  <GridItem className={classes.techListItem}>Responsive Design</GridItem>
                  <GridItem className={classes.techListItem}>Git</GridItem>
                  <GridItem className={classes.techListItem}>GitHub</GridItem>
                  <GridItem className={classes.techListItem}>Bitbucket</GridItem>
                  <GridItem className={classes.techListItem}>Jira</GridItem>
                  <GridItem className={classes.techListItem}>Agile workflow</GridItem>
                </GridContainer>
              </div>
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
