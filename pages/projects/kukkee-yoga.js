import Layout from '../../components/Layout.js';
import GoalSection from '../../components/GoalsSection.js';
import GridContainer from '../../components/GridContainer.js';
import GridItem from '../../components/GridItem.js';
import Button from '../../components/Button.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import callToActionStyle from '../../styles/callToActionStyle.js';

const useStyles = makeStyles(callToActionStyle);

export default function KukkeeYoga() {
  const classes = useStyles();

  const project = (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
          <h1 className={classes.title}>Your Story Starts Here.</h1>
          <h4>
            All yoga styles can help balance your body, mind, and spirit, but
            they achieve it in various ways. Some yoga styles are intense and
            vigorous. Others are relaxing and meditative. No matter which type
            you choose, yoga is a great way to stretch and strengthen your body,
            focus your mind, and relax your spirit.
          </h4>
          <br />
          <Button
            color="danger"
            size="lg"
            href="https://kukee-bliss.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-play" />
            See Live
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
  return (
    <Layout
      project={project}
      imageUrl="https://source.unsplash.com/L2wq7Y3h7ag/1600x900"
    >
      <div>
        <GoalSection />
      </div>
    </Layout>
  );
}
