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

export default function GittixStore() {
	const classes = useStyles();
	const project = (
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
					<h1 className={classes.title}>E-Commerce Store</h1>
					<h4 className={classes.smallDescription}>
						A Full-stack web app made with microservices, server-side rendering
						and event-based architecture. All the services are dockerized and
						deployed to kubernetes cluster hosted in Digital Ocean with CI/CD
						pipeline powered by GitHub actions.
					</h4>
					<br />
					<Button
						color="danger"
						size="lg"
						href="http://www.useticketing.store/"
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
		<Wrapper project={project} imageUrl="/images/gittix-bg.jpg">
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
									<p>
										On the frontend, I used React and Next JS to present content
										to users. Each service is created using Node and Express.
										Data for each service is held in either a Mongo database or
										Redis. The entire app is deployed and runs in Docker
										containers executed in a Kubernetes cluster. Finally, almost
										all of the code in this course is written with Typescript.
									</p>
								</GridItem>
								<GridItem>
									<p>
										General flow of the store allows to create a ticket for
										sale(
										<strong>Ticket service</strong>
										). Upon creationg, tickets can be seen by other users, who
										can start purchase process by creating an order(
										<strong>Order service</strong>
										). When an order is created, the ticket becomes reserved and
										not available for purchasing by other users until an order
										is cancelled or expired (<strong>Expiration service</strong>
										). After an order is created, the user can pay for it using
										Stripe payment API (<strong>Payment service</strong>). Only
										logged in users can create new tickets or buy existing items
										(<strong>Auth service</strong>)
									</p>
								</GridItem>
								<GridItem>
									<p>
										Each service is backed by a separate MongoDB instance.
										Communication between services is enabled by NATS Streaming
										Server.
									</p>
									<p>Traffic is routed by ingress nginx load balancer.</p>
									<p>
										Different services share some amount of code, especially
										express endpoints middlewares, events publishers/listeners
										and TypeScript type definintions.
									</p>
									<p>
										To handle that I created a shared npm library that can be
										found in
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://www.npmjs.com/package/@sbsoftworks/gittix-common"
										>
											{` npm `}
										</a>
										and
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://github.com/arstrel/sbsoftworks-gittix-common"
										>
											{` GitHub `}
										</a>
									</p>
								</GridItem>
								<GridItem>
									<p>
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://github.com/arstrel/ticket-store"
										>
											{` Project in GitHub `}
										</a>
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
									<p>Rendered server-side by Next.js</p>
								</GridItem>
								<GridItem>
									<p>
										Client service allows to perform all the basic features to
										signin, create a ticket, create an order followed by a
										payment.
									</p>
								</GridItem>
								<GridItem>
									<p>
										Signup/signin/signout functionality is achieved by storing a
										user info in a JWT token that is stored inside a http-only
										cookie.
									</p>
								</GridItem>
								<GridItem>
									<p>
										Working with Next js highlighted a small, but challenging
										detail. During a server-side rendering, next app is making a
										request to other services in the kubernetes cluster. To
										achieve that I referred to ingress nginx load balancer by
										it's internal cluster name.
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
									<p>
										Backend consists of five separate Node/Express REST APIs
										with a four separate MongoDBs, a Redis instance and a NATS
										Streaming Server
									</p>
								</GridItem>
								<GridItem component="ul">
									<li>Auth: Node express server backed by MongoDB</li>
									<li>Ticket: Node express server backed by MongoDB</li>
									<li>Order: Node express server backed by MongoDB</li>
									<li>Expiration: Persistent timer service backed by Redis</li>
									<li>Payment service with Stripe and MongoDB</li>
								</GridItem>
								<GridItem>
									<p>
										<strong>The features include:</strong>
									</p>
								</GridItem>
								<GridItem>
									<p>Optimistic concurrency control</p>
									<p>
										Upon updating the entity (ticket or order), main service,
										responsible for managing such entity, increments the version
										property. All the rest of the services, upon receiving an
										event will check the version of the replicated entity in
										their own database. These services will only process the
										event if it is in order, meaning if it has a version of the
										entity of -1 compared to the one in it's own database. This
										enables the app to only process events in order of how they
										were issued. This is achieved by the plugin to mongoose
										schema that comes from mongoose-update-if-current package
										and changes to onMessage method implemented on event
										listeners. TicketUpdatedListener for example.
									</p>
								</GridItem>
								<GridItem>
									<p>
										All deployed to Heroku via CI/CD pipeline powered by GitHub
										Actions.
									</p>
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
									<p>
										There were a lot of challenges along the way especially when
										it comes to smooth testing and deployment pipeline. More
										technical details, commands and env variables can be found
										in a readme.
									</p>
								</GridItem>
								<GridItem>
									<p>
										The website's structure and every REST API endpoint were
										documented by creating a Postman collection that can be
										found in the repo.
									</p>
								</GridItem>
								<GridItem>
									<p>Check out full readme:</p>
								</GridItem>
								<GridItem>
									<p>
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://github.com/arstrel/ticket-store"
										>
											{` Project in GitHub `}
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
