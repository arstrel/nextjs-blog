import Wrapper from '../../components/Wrapper';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Button from '../../components/Button';
import NavPills from '../../components/NavPills';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Storefront from '@material-ui/icons/Storefront';
import Computer from '@material-ui/icons/Computer';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import MenuBook from '@material-ui/icons/MenuBook';

import callToActionStyle from '../../styles/callToActionStyle';
import stylesProfile from '../../styles/profilePage';

const useStyles = makeStyles({ ...stylesProfile, ...callToActionStyle });

export default function KukkeeYoga() {
  const classes = useStyles();
  const project = (
    <div className={classes.container}>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          className={classes.actionContainerTeep}
        >
          <h1 className={classes.title}>Teep 100%</h1>
          <h4 className={classes.smallDescription}>
            Teep is made for food and beverage industry workers. Servers,
            waitresses and bartenders work in a fast-paced environment without a
            minute break for hours and then typically spent 15-25 minutes doing
            numerous operations to calculate their shift closing paperwork. This
            process is streamlined with Teep.
          </h4>
          <br />
          <Button
            color="danger"
            size="lg"
            href="https://teep-app.herokuapp.com/"
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
    <Wrapper project={project} imageUrl="/images/restaurant.jpeg">
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
            tabButton: 'Story and Features',
            tabIcon: DynamicFeed,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Teep is a way for food and beverage workers to calculate tips
                  and track their earnings in one place. Teep can be used
                  without login for a quick calculation or with it to save the
                  calculation for future reference.
                </GridItem>
                <GridItem>
                  <p>
                    Teep is a versatile tool that can be configured for
                    different restaurant or bar setting. <br />
                    It supports:
                  </p>
                </GridItem>
                <GridItem component="ul">
                  <li>Tipout for bartenders or/and foodrunners</li>
                  <li>Various event tip percentage</li>
                  <li>
                    Automatic split between selected number of team members
                  </li>
                  <li>
                    Authentication system has two levels for employees and
                    managers.
                  </li>
                </GridItem>
                <GridItem>
                  <p>
                    <strong>Take a further look with demo credentials:</strong>
                  </p>
                  <p>
                    <strong>Login: </strong>
                    cool@cool.com
                    <br />
                    <strong>Password: </strong>
                    cool
                  </p>
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
                  <p>
                    The project is powered by HTML/CSS and
                    <a href="https://handlebarsjs.com/"> Handlebars.js </a>
                    templating engine.
                  </p>
                </GridItem>
                <GridItem>
                  Styles are made with
                  <a href="https://materializecss.com/"> Materialize</a> CSS
                  Library.
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Backend Tech',
            tabIcon: Computer,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>Node/Express powered REST API. </GridItem>
                <GridItem>
                  <p>
                    <strong>The features include:</strong>
                  </p>
                </GridItem>
                <GridItem component="ul">
                  <li>Image handling with Cloudinary</li>
                  <li>MongoDB to store data</li>
                  <li>
                    Passport.js to handge authentification and authorization
                  </li>
                </GridItem>
                <GridItem>
                  <p>All deployed to Heroku.</p>
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Other',
            tabIcon: MenuBook,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Quick and simple, this project was made with just HTML/CSS and
                  <a href="https://www.npmjs.com/package/hbs"> Handlebars </a>
                </GridItem>
                <GridItem component="p">
                  <a href="https://github.com/arstrel/project-2">
                    See on GitHub
                  </a>
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
