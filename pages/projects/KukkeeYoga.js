import { makeStyles } from '@material-ui/core/styles';
import Storefront from '@material-ui/icons/Storefront';
import Computer from '@material-ui/icons/Computer';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import MenuBook from '@material-ui/icons/MenuBook';
import Wrapper from '../../components/Wrapper';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Button from '../../components/Button';
import NavPills from '../../components/NavPills';

// @material-ui/core components
// @material-ui/icons

import callToActionStyle from '../../styles/callToActionStyle';

const useStyles = makeStyles(callToActionStyle);

export default function KukkeeYoga() {
	const classes = useStyles();
	const project = (
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
					<h1 className={classes.title}>Kukee-bliss yoga studio</h1>
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
						tabButton: 'Frontend Tech',
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
										<track default kind="captions" srcLang="en" src="..." />
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
								<GridItem>Node/Express powered REST API. </GridItem>
								<GridItem>
									<p>
										<strong>The features include:</strong>
									</p>
								</GridItem>
								<GridItem component="ul">
									<li>Welcome and password reset emails with Nodemailer</li>
									<li>Image handling with Cloudinary</li>
									<li>MongoDB to store data</li>
									<li>
										Passport.js to handle authentication and authorization
									</li>
								</GridItem>
								<GridItem>
									<p>All deployed to Heroku.</p>
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
									This website was created in collaboration with the actual
									working business. As such, it was important to have future
									developers in mind and to document everything thoroughly.
								</GridItem>
								<GridItem>
									The website's structure and every REST API endpoint were
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
