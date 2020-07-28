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
        <GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
          <h1 className={classes.title}>Kukee-bliss yoga studio</h1>
          <h4 className={classes.smallDescription}>
            A yoga studio in South Carolina had just a facebook page for web
            presence and a big dream of making yoga classes affordable and
            available for the local community. The owner wanted a way to create
            custom daily routines fot students of different age and levels...
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
            tabButton: 'Story and Features',
            tabIcon: DynamicFeed,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Features custom yoga routine builder and allows to assign
                  routines to select users and/or groups.
                </GridItem>
                <GridItem component="ul">
                  In collaboration with yoga studio. Dynamic:
                  <li>Quotes</li>
                  <li>FAQ</li>
                  <li>Testimonials</li>
                  <li>Users</li>
                  <li>Gallery</li>
                  <li>Class packages</li>
                  <li>Daily routines</li>
                  <li>Sequence builder</li>
                  Welcome emails and password reset, legal disclosures downloads
                  and many more.
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Frontend Tech',
            tabIcon: Storefront,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>Powered by React.js</GridItem>
                <GridItem className={classes.videoContainer}>
                  <video width="80%"  controls autoPlay>
                    <source
                      src="https://s3.amazonaws.com/media-p.slid.es/videos/1110040/VMcJYn9w/kukee-demo-sped-up.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Backend Tech',
            tabIcon: Computer,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>Node powered REST API</GridItem>
                <GridItem>Express</GridItem>
                <GridItem>Mongo</GridItem>
                <GridItem>Passport</GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Docs',
            tabIcon: MenuBook,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  This website was created in collaboration with the actual
                  working business. As such, it was important to have future
                  developers in mind and document everything thoroughly.
                </GridItem>
                <GridItem>
                  The website's structure and every REST API endpoint was
                  documented with examples of request parameters and response
                  shape.
                </GridItem>
                <GridItem>Check out full docs in:</GridItem>
                <GridItem>
                  <ul>
                    <li>
                      <a href="https://mind42.com/mindmap/cbb3de54-0e78-43d8-b5fa-6b465066e96f?rel=pmb">
                        Text Form
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/yoga-app/kukee-bliss">
                        Mindmap form
                      </a>
                    </li>
                  </ul>
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
