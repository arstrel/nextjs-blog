import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import TrackChanges from '@material-ui/icons/TrackChanges';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import InfoArea from './InfoArea';
import { skillset } from '../lib/constants';

import stylesProfile from '../styles/profilePage';
import stylesGoals from '../styles/goalsStyle';

const useStyles = makeStyles({ ...stylesGoals, ...stylesProfile });

export default function GoalsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Making Websites Stand Out</h2>
          <div className={classes.description}>
            <div className={classes.section}>
              I have experience in using the following technologies:
              <GridContainer className={classes.techItemsContainer}>
                {skillset.map((el) => (
                  <GridItem key={el} className={classes.techListItem}>
                    {el}
                  </GridItem>
                ))}
              </GridContainer>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="My values"
              description="Working on a project, I aim to write working and testable code, in allocated time and following the accepted best practices.
              I pay attention to the project structure that will enable easy maintenance and implementing future enhancements. 
              I am a team player, I value team collaboration and clarity of communication."
              icon={TrackChanges}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="People-first development"
              description="My work starts with human beings and ends with the technical solutions that are tailored to individual and business needs.
              As I see it, my job is to understand the people I am trying to reach, and then create a solution from their perspective. Using technology to serve people."
              icon={SupervisedUserCircle}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Scalable and Secure"
              description="There are a lot of moving parts in any organization. When all the pieces fall in the right places, 
              I want to be sure that my code won't be a bottleneck to hold the progress. I invest time and effort to continuously improve my knowledge and skills 
              to build scalable and secure solutions to give piece of mind to users and organizations."
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

