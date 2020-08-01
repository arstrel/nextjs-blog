import Wrapper from "../../components/Wrapper";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import Button from "../../components/Button";
import NavPills from "../../components/NavPills";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Storefront from "@material-ui/icons/Storefront";
import DynamicFeed from "@material-ui/icons/DynamicFeed";
import MenuBook from "@material-ui/icons/MenuBook";

import callToActionStyle from "../../styles/callToActionStyle";
import stylesProfile from "../../styles/profilePage";

const useStyles = makeStyles({ ...stylesProfile, ...callToActionStyle });

export default function RecipesForkify() {
  const classes = useStyles();
  const project = (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
          <h1 className={classes.title}>Recipes with Forkify</h1>
          <h4 className={classes.smallDescription}>
            A yoga studio in South Carolina had only a facebook page for web
            presence and a big dream of making yoga classes affordable and
            available for the local community. The owner wanted a way to create
            custom daily routines for students of different ages and levels...
          </h4>
          <br />
          <Button
            color="danger"
            size="lg"
            href="https://arstrel.github.io/recepies/dist/"
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
    <Wrapper project={project} imageUrl="/images/recipe-bg.jpeg">
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
            tabButton: "Story and Features",
            tabIcon: DynamicFeed,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  Features two levels of user rights: admin and user. There is a
                  custom daily yoga routine builder in the admin's zone that
                  allows to create and assign the routines to individual users
                  or to the entire group!
                </GridItem>
                <GridItem component="ul">
                  <strong>Dynamic elements include:</strong>
                  <li>
                    <i>Quotes: </i>
                    rotate from predefined list at every home page load.
                  </li>
                  <li>
                    <i>FAQs: </i>
                    only available if logged in as an admin. Allows to
                    add/delete/edit Q and A's directly from the page.
                  </li>
                  <li>
                    <i>Gallery: </i>
                    allows to add/remove/edit pictures or youtube videos. Made
                    with Cloudinary.
                  </li>
                  <li>
                    <i>Class packages: </i>
                    the users may express interest in purchasing class packages
                    and the admin will see this in the admin's zone, together
                    with user's email.
                  </li>
                  <li>Daily routine sequence builder.</li>
                </GridItem>
                <GridItem>
                  <p>
                    <strong>Take a further look with demo credentials:</strong>
                  </p>
                  <p>
                    <strong>Login: </strong>
                    admin@admin.com
                    <br />
                    <strong>Password: </strong>
                    admin
                  </p>
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: "Frontend Tech",
            tabIcon: Storefront,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>Powered by React.js</GridItem>
                <GridItem className={classes.videoContainer}>
                  <video width="80%" controls autoPlay>
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
            tabButton: "Other",
            tabIcon: MenuBook,
            tabContent: (
              <GridContainer justify="center">
                <GridItem>
                  <p>
                    <a href="https://github.com/arstrel/recepies/">
                      See it on GitHub
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
