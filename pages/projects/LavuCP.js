import { makeStyles } from '@material-ui/core/styles';
import Computer from '@material-ui/icons/Computer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Wrapper from '../../components/Wrapper';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import NavPills from '../../components/NavPills';

import callToActionStyle from '../../styles/callToActionStyle';

const useStyles = makeStyles(callToActionStyle);

export default function LavuCP() {
	const classes = useStyles();

	return (
		<Wrapper small imageUrl="/images/lavu-bg.jpeg">
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
						tabButton: 'Tech Stack',
						tabIcon: Computer,
						tabContent: (
							<GridContainer justify="center">
								<GridItem>
									<img
										src="/images/lavu-cp.jpg"
										alt="MVC Pattern"
										className={classes.imgLavu}
									/>
								</GridItem>
								<GridItem>
									<p>
										<strong>Back end: </strong>
										GraphQL, Apollo, NodeJS, Javascript, MySQL/Sequelize, REST
									</p>
									<p>
										<strong>Front end: </strong>
										ReactJS, React Context API, Styled Components, Material UI,
										GraphQL, Javascript, Webpack v4.
									</p>
								</GridItem>
							</GridContainer>
						),
					},
					{
						tabButton: 'My Role',
						tabIcon: AccountCircle,
						tabContent: (
							<GridContainer justify="center">
								<GridItem>
									<p>
										Control panel was the project that I contributed to at Lavu
										continuously for eight month. We were a team of five
										developers, two QA engineers, one designer, and one project
										manager.
									</p>
									<div>
										Control panel is at the heart of customer's interaction with
										the Lavu restaurant management system when it comes to:
										<ul>
											<li>Summary and Statistics</li>
											<li>Scheduling</li>
											<li>Managing the workforce</li>
											<li>Settings</li>
											<li>Orders and Transactions</li>
											<li>
												Customer's account with Lavu, payments and invoices
											</li>
										</ul>
									</div>
									<p>
										Over the course of my time with Lavu, I worked on every part
										mentioned above.
									</p>
									<div>
										<strong>Some features implemented by me:</strong>
										<ul>
											<li>
												Re-wrote timecards calculating logic in it's entirety.
												Timecards used to calculate time worked by an employee
												within a selected period. This time is then used to
												calculate appropriate pay, all within this same module.
												The complications come from the fact that the system
												accounts for regular time, overtime and 2x pay. It has
												to take into account multiple user settings regarding
												the holidays, off days, paid and unpaid breaks, employee
												pay grade and so on.
											</li>
											<li>
												Optimized workflow in workforce module to implement
												extensive client-side error checking in forms, make the
												module mobile-friendly. Re-implemented all the forms
												using Material UI components.
											</li>
											<li>
												Integrated some parts of invoice fetching with Zuora
												Payments API and made customer's account page mobile
												responsive.
											</li>
											<li>
												Implemented the feature to show customer's signature for
												a given transaction
											</li>
											<li>
												Implemented heavily customized transactions table with
												infinite or paginated view, module to display order and
												transaction details. Made it all mobile friendly.
											</li>
											<li>
												Implemented site-wide support for customer-selected date
												format.
											</li>
										</ul>
									</div>
								</GridItem>
							</GridContainer>
						),
					},
				]}
			/>
		</Wrapper>
	);
}
