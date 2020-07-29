import Wrapper from '../../components/Wrapper';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Button from '../../components/Button';
import NavPills from '../../components/NavPills';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Computer from '@material-ui/icons/Computer';
import MenuBook from '@material-ui/icons/MenuBook';

import callToActionStyle from '../../styles/callToActionStyle';
import stylesProfile from '../../styles/profilePage';

const useStyles = makeStyles({ ...stylesProfile, ...callToActionStyle });

export default function Budgety() {
  const classes = useStyles();
  const project = (
    <div className={classes.container}>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          className={classes.actionContainerWhite}
        >
          <h1 className={classes.title}>Budgety</h1>
          <h4 className={classes.smallDescription}>
            Small vanilla JavaScript project to showcase MVC Pattern. With the
            use of IIFE, it separates Budget calculating logic, UI, and the app
            itself.
          </h4>
          <br />
          <Button
            color="danger"
            size="lg"
            href="https://arstrel.github.io/budgety/"
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
    <Wrapper project={project} imageUrl="/images/budgety.jpeg">
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
            tabButton: 'MVC Pattern',
            tabIcon: Computer,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  <img
                    src="https://raw.githubusercontent.com/arstrel/budgety/master/StructureFull.PNG"
                    alt="MVC Pattern"
                    className={classes.imgFluid}
                  />
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Lessons learned',
            tabIcon: MenuBook,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Separation of concerns with three distinct modules
                  encapsulated in IIFE.
                </GridItem>
                <GridItem component="p">
                  <a href="https://github.com/arstrel/budgety">See on GitHub</a>
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
