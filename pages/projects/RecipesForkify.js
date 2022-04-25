import { makeStyles } from '@material-ui/core/styles';
import Storefront from '@material-ui/icons/Storefront';
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

export default function RecipesForkify() {
	const classes = useStyles();
	const project = (
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
					<h1 className={classes.title}>Recipes with Forkify</h1>
					<h4 className={classes.smallDescription}>
						Recipes with Forkify allows you to search recipes from multiple
						sources in one place. This little app can calculate the ammount of
						ingredients according to desired servings, save the recipes in Liked
						list persisted in localStorage and maintain shopping list.
					</h4>
					<p>
						<strong>
							<a
								href="https://cors-anywhere.herokuapp.com/corsdemo"
								rel="noopener noreferrer"
								target="_blank"
							>
								Enable CORS proxy for demo to work
							</a>
						</strong>
					</p>
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
						tabButton: 'Story and Features',
						tabIcon: DynamicFeed,
						tabContent: (
							<GridContainer justify="center">
								<GridItem>
									When it comes to creating a website that needs to:
									<ul>
										<li>fetch the data from third party API</li>
										<li>maintain multiple pieces of internal state</li>
										<li>
											frequently update different parts of the UI in response to
											user's actions
										</li>
									</ul>
									All too often, it is tempting to reach out for heavy-hitters
									like React or Next. That is why the challenge of this project
									was to build a dynamic website with ES6 JavaScript and
									Model-View-Controller Architecture.
								</GridItem>
								<GridItem component="ul">
									<p>This project has:</p>
									<li>
										Four isolated data models: Search, Recipe, Shopping list,
										and Likes.
									</li>
									<li>
										Four corresponding view handlers that are responsible for
										adding/removing and updating the HTML.
									</li>
									<li>
										Main controller that has all the logic, operates models and
										views.
									</li>
								</GridItem>
								<GridItem>
									<p>
										All of the above is transpiled with Babel, bundled up
										together with Webpack, and deployed on Github Pages.
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
								<GridItem>Powered by HTML, CSS and JavaScript</GridItem>
								<GridItem>
									<p>
										I used modern CSS tools to build this custom layout. Most of
										it is made with the use of CSS Grid and Flexbox. There are
										also some animations to make the website more interactive.
									</p>
									<p>
										As I use Webpack here, the website is served from /dist
										folder, which contains the bundled code.
									</p>
									<p>
										All the UI manipulations are organized into four "view"
										files that take care of a corresponding parts of the
										website. Mainly, I make use of "insertAdjacentHTML" DOM
										function to insert a template string with the markup at the
										appropriate place in the UI.
									</p>
									<p>
										To detect clicks on the elements that are not yet there at
										the time of load, such as servings update button in the
										central part of a recipe's full view, I use ".matches" and
										".closest" methods and event delegation.
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
									The data models are organized as ES6 classes that have some
									methods to manipulate the data stored inside.
									<p>
										"Likes" data is persisted in localStorage to ensure that
										saved recipes are not lost for the user.
									</p>
									<p>
										One of the most challenging and trickiest (and probably
										buggiest) part was the calculation of the amounts of
										ingredients for the recipe. The recipes come from different
										sources and do not have the same structure. Most of the
										ingredients use fractions to indicate the necessary amounts,
										some of them have units and some do not. So, the tricky part
										was to parse the ingredients to separate the amount from the
										unit and from the rest of the ingredient. After that, the
										app stores this data separately in an object with decimal
										amounts to enable calculations. For the UI, this data is
										changed once again to fractions.
									</p>
								</GridItem>
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
