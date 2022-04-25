import { makeStyles } from '@material-ui/core/styles';
import Computer from '@material-ui/icons/Computer';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import MenuBook from '@material-ui/icons/MenuBook';
import Wrapper from '../../components/Wrapper';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Button from '../../components/Button';
import NavPills from '../../components/NavPills';

import callToActionStyle from '../../styles/callToActionStyle';

const useStyles = makeStyles(callToActionStyle);

export default function NodeBlogster() {
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
					<h1 className={classes.title}>Private Blogster</h1>
					<h4 className={classes.smallDescription}>
						At the first glance, Blogster is nothing special, with a pretty bare
						bones UI. The power is hidden under the hood. Blogster is here to
						show:
						<GridItem component="ul">
							<li>how to make a scalable file upload with AWS S3</li>
							<li>
								how to intercept Mongoose queries and implement lighting fast
								caching with Redis
							</li>
							<li>the road to ultimate testing setup and so much more.</li>
						</GridItem>
					</h4>
					<br />
					<Button
						color="danger"
						size="lg"
						href="https://node-blogster.herokuapp.com/"
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
		<Wrapper project={project} imageUrl="/images/blogster-bg.jpeg">
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
									The way modern software defies distance has always fascinated
									me. I see beauty in connecting these peaces together.
									<p>
										In Blogster, when the user wants to add a picture to the
										post, quite a few things have to work perfectly together to
										make it possible:
									</p>
									<ol>
										<li>
											The browser grasps meta data about the file, including
											things like file type and file name
										</li>
										<li>
											The browser sends this information to the Blogster's
											backend server
										</li>
										<li>
											Blogster's backend connects to AWS S3 bucket to obtain a
											very special pre-signed link. This link is valid only for
											this particular file, can be used only one time, from a
											particular origin and during the next few minutes
										</li>
										<li>
											Using this link, the browser sends the picture directly to
											S3 bucket to avoid unnecessary work by our own server
										</li>
										<li>
											In response, S3 bucket gives to the browser a new filename
											and a key to retrieve this particular file
										</li>
										<li>
											This info gets back to Blogster server, which saves it in
											remote Mongo Database, together with the user's Google ID
										</li>
									</ol>
									<p>
										All of this requires carefull configuration, a lot of
										packages and, frankly speaking, seems a bit like a magic to
										me. <br />
										The magic that I can be a part of!
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
									I talked in detail about{' '}
									<a href="https://medium.com/swlh/a-road-to-the-ultimate-testing-setup-with-jest-and-headless-chrome-browser-83f14e3799e3?source=friends_link&sk=02000b2fb5ce58867a4b181fe384ce94">
										The ultimate testing setup{' '}
									</a>
									that I've used in this app with Jest and headless Chrome
									browser. Having automated tests in the app is always great,
									and it allows you to get the most from Continuous
									Integration/Continuous Deployment model. Continuous
									integration puts a great emphasis on testing automation to
									check that the application is not broken whenever new commits
									are integrated into the main branch.
									<p>
										Blogster has it all with Travis-CI, which automatically
										detects new commit to Github, runs the build and tests the
										app. If the build passes the tests, Travis triggers new
										deployement on Heroku. Every change that passes all stages
										of this process is released to production. There is no human
										intervention, and only a failed test will prevent a new
										change to be deployed.
									</p>
								</GridItem>
								<GridItem>
									<p>
										For most learning projects and tutorials, basic Node/Express
										server is more than enough. With Blogster, I wanted to go
										further and explore how to implement caching with Redis. If
										the app has tens of thousands of users or more, you have to
										think about using the database efficiently and avoid
										duplicate queries.
									</p>
									<p>
										Redis is an in-memory data store built for solving caching
										needs. By adding caching to your application, you can
										decrease the amount of time that any given request takes,
										improving the overall response time of the app.
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
									The UI flow of Blogster is very basic and only available after
									login with Google. For a logged-in user, Blogster offers to
									create a private post with or without a picture attached; the
									posts are then displayed in a list and that's it. The absolute
									focus here was to learn, use and show some advanced Node
									concepts. More details on that in the next section.
								</GridItem>
								<GridItem>
									<p>
										The frontend is made with React, Redux, Redux-thunk (that
										allows to have functions as actions), and Redux-forms.{' '}
									</p>
									<p>Styles are made with Materialize.</p>
								</GridItem>
								<GridItem>
									<p>
										<a href="https://github.com/arstrel/NodeConcepts">
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
