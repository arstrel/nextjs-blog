import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Button from '../components/Button.js';
import GridContainer from '../components/GridContainer.js';
import GridItem from '../components/GridItem.js';
import HeaderLinks from '../components/HeaderLinks.js';
import Parallax from '../components/Parallax.js';
import GoalsSection from '../components/GoalsSection.js';
import ProjectsSection from '../components/ProjectsSection.js';
import Typography from '../components/Typography/Muted';

import stylesProfile from '../styles/profilePage.js';
import stylesGoals from '../styles/goalsStyle.js';
import { skillset } from '../lib/constants';

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
          color: 'white',
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
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.instagram.com/timberto/"
                      target="_blank"
                    >
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.facebook.com/arstrels"
                      target="_blank"
                    >
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h5>
                I aspire to bring people closer together with the leverage of
                technology — delivering well-structured, fast, reliable, and
                user-centered software products. I am a proud winner of the
                Facebook Digital Creators Scholarship and IronHack Coding
                Bootcamp alumni.
                <br />
                My way to empower others is to publish my knowledge in articles,
                which have been featured in “The Startup” and “Level Up Coding”
                — two of the largest tech communities on Medium. When I’m not in
                front of the computer, I enjoy discovering the ancient secrets
                of Qi Gong and practicing yoga.
              </h5>
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
