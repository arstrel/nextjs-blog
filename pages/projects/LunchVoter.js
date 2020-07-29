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

export default function LunchVoter() {
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
          <h1 className={classes.title}>Lunch Voter</h1>
          <h4 className={classes.smallDescription}>
            Leveraging the power of graphQL subscriptions to solve a classic
            office battle over the place to go for lunch! Which one of the newly
            opened places would you like to explore with your coleagues today?
            Put it to a vote!
          </h4>
          <br />
          <Button
            color="danger"
            size="lg"
            href="https://lunchvoterlive.herokuapp.com/"
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
    <Wrapper project={project} imageUrl="/images/lunch.jpeg">
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
                  <span>
                    This app is about reaching one single decision: pick a place
                    for daily lunch with your office crew. There is not much to
                    say here. There is no fancy design or persistent data
                    storage, but there is a powerful technology behind it.
                  </span>
                  <p>
                    This little voter is powered by GraphQL subscriptions which
                    makes it show updates in real-time! The time is of the
                    essence and the UI is as simple as possible here.
                  </p>
                  <p>
                    Go - vote or add your own option - see the changes reflected
                    instantly.
                  </p>
                  <p>
                    The fun fact is that because of the instant updates the
                    voting process becomes competitive very quickly. Your office
                    buddies can upvote their choice of downvote yours as many
                    times as they like. The most persistent wins!
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
                <GridItem>Powered by React.</GridItem>
                <GridItem>
                  To create this simple UI, I've used{' '}
                  <a href="http://material-ui.com/">Material UI </a>React
                  components library.
                  <p>
                    I really like using this particular UI library for projects
                    large or small. It strikes the great balance between
                    providing advanced functionaity and giving enough control to
                    the developer.
                  </p>
                  <p>
                    Material UI may not seem as user-friendly as some other
                    component collections out there. It requires to compose
                    functionality you need out of more granular building blocks.
                    But it all pays out when you need to build something more
                    custom.
                  </p>
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
                  <p>Node/Express powered GraphQL API.</p>
                  <p>
                    With the help of
                    <a href="https://www.apollographql.com/"> Apollo </a>
                    Graph QL platform and subscriptions based on websockets,
                    lunch voter can maintain a continuous connection to the
                    server and "subscribe" to the event of adding new venue or
                    to the event of votes casted.
                  </p>
                  <p>
                    When such events occur, the server notifies the client and
                    update it with the fresh data. The UI then updates with it
                    seamlessly and in real-time.
                  </p>
                </GridItem>
                <GridItem>
                  <p>
                    <img
                      src="https://scotch-res.cloudinary.com/image/upload/dpr_2,w_700,q_auto:good,f_auto/media/1376/DHGlP6nnQCKYjiMgoFLl_Screen%2520Shot%25202017-09-23%2520at%25207.52.23%2520PM.png"
                      className={classes.imgFluid}
                      alt="Subscription scheme"
                    />
                  </p>
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
                  For a free teer deployements Heroku winds down the app after
                  certain time of inactivity. The lunch voter here doe not use
                  any data persistence which means the votes get wiped out after
                  a while automatically! This is perfect for our little use
                  case. After the team leaves for lunch, the voter is ready for
                  the next use.
                  <p>
                    <a href="https://github.com/arstrel/graphql-apollo-subscriptions">
                      See on GitHub
                    </a>
                  </p>
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
