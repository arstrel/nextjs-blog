import { makeStyles } from '@material-ui/core/styles';
import Computer from '@material-ui/icons/Computer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Wrapper from '../../components/Wrapper';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import NavPills from '../../components/NavPills';

import callToActionStyle from '../../styles/callToActionStyle';

const useStyles = makeStyles(callToActionStyle);

export default function FreemanOEP() {
	const classes = useStyles();

	const project = (
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6} className={classes.actionContainer}>
					<h1 className={classes.title}>Freeman Online Events Pro</h1>
					<h4 className={classes.smallDescription}>
						The global leader in events. Whether virtual, in-person, or hybrid,
						we are on a mission to redefine live for a new era.
					</h4>
				</GridItem>
			</GridContainer>
		</div>
	);

	return (
		<Wrapper project={project} imageUrl="/images/freemanOEP.jpg">
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
									<p>
										<strong>Front end: </strong>
									</p>
									<p>
										ReactJS, Redux, JS/TS. Each event had a custom design with a
										unique features. Working on the front end of OnlineEventPro,
										I implemented features like client-side and server-side
										content filtering, scoped search, Single-Sign-On,
										authorization and authentication flows.
									</p>
									<p>
										<strong>Back end: </strong>
									</p>
									<p>
										NodeJS, AWS Serverless suite with Lambdas, S3 and API
										Gateway. Typical workday included making changes to REST
										Node API, interacting with AWS Secrets Manager, S3 buckets,
										developing AWS Lambda functions
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
									Working with the Freeman team on Events platform
									OnlineEventPro
									<ul>
										<li>
											Designed and implemented configurations section to events
											management tool and cascading changes in events platform.
											That allowed to switch from managing over 50 env variables
											per event to using flexible runtime configs. It led to
											saving over 100 hours of DevOps work each month
										</li>
										<li>
											Identified, presented to leadership and implemented a new
											way of handling data with AWS S3 pre-signed urls. Reduced
											cloud resources needed to run the app and increased speed.
										</li>
										<li>
											Implemented authorization (gating) to accommodate show
											ticket tiers with different access rights.
										</li>
										<li>
											Enhanced the product by adding improvements to the
											codebase across UI React/Redux, Node.js API, AWS
											Lambda/Cognito/S3.
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
