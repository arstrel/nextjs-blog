import Wrapper from '../../components/Wrapper.js';
import GridContainer from '../../components/GridContainer.js';
import GridItem from '../../components/GridItem.js';
import Button from '../../components/Button.js';
import NavPills from '../../components/NavPills.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Storefront from '@material-ui/icons/Storefront';
import Computer from '@material-ui/icons/Computer';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import MenuBook from '@material-ui/icons/MenuBook';

import callToActionStyle from '../../styles/callToActionStyle.js';
import stylesProfile from '../../styles/profilePage.js';

const useStyles = makeStyles({ ...stylesProfile, ...callToActionStyle });

export default function KukkeeYoga() {
  const classes = useStyles();

  const project = (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
          <h1 className={classes.title}>Kukee-bliss yoga studio</h1>
          <h4 className={classes.smallDescription}>
            The website for a small yoga studio built in MERN stack: features
            admin and user auth rights, allows to create and assign personal and
            group daily routines from a custom yoga routine builder.
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
    <Wrapper project={project} imageUrl="/images/china.jpg">
      <NavPills
        alignCenter
        active={0}
        horizontal={{
          tabsGrid: { md: 3, sm: 3, xs: 12 },
          contentGrid: { md: 9, sm: 9, xs: 12 },
        }}
        color="primary"
        tabs={[
          {
            tabButton: 'Features',
            tabIcon: DynamicFeed,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Features custom yoga routine builder and allows to assign
                  routines to select users and/or groups.
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Frontend Tech',
            tabIcon: Storefront,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  React and some more react.
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Backend Tech',
            tabIcon: Computer,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Node powered REST API
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Docs',
            tabIcon: MenuBook,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Thoroughly documented
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
