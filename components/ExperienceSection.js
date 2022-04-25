import React from 'react';
import Link from 'next/link';
// nodejs library that concatenates classes
import clsx from 'clsx';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import Button from './Button';
import Card from './Card/Card';
import CardBody from './Card/CardBody';
import CardFooter from './Card/CardFooter';

import styles from '../styles/experienceStyles';

const useStyles = makeStyles(styles);

export default function ExperienceSection() {
	const classes = useStyles();
	const imageClasses = clsx(
		classes.imgRaised,
		classes.imgCircle,
		classes.imgFluid
	);
	const cardTitleClasses = clsx(classes.title, classes.cardTitle);
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>Recent Work Experience</h2>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<Card plain className={classes.singleCard}>
							<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
								<img
									src="/images/lavu-avatar.png"
									alt="..."
									className={imageClasses}
								/>
							</GridItem>
							<h4 className={cardTitleClasses}>
								Lavu Control Panel (Web)
								<br />
								<small className={classes.smallTitle}>
									React, Node, Redis, Apollo, GraphQL, MySQL
								</small>
							</h4>
							<CardBody>
								<p className={classes.description}>
									A Full-stack web app for administration of the Lavu restaurant
									management system. Control panel is a center location to work
									with customer's account, handling the workforce, make
									schedules, inspect transactions and deal with hundreds of
									available settings.
								</p>
							</CardBody>
							<CardFooter className={classes.justifyCenter}>
								<Link href="/projects/LavuCP">
									<Button round color="primary" className={classes.margin5}>
										See Details
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</GridItem>

					<GridItem xs={12} sm={12} md={4}>
						<Card plain className={classes.singleCard}>
							<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
								<img
									src="/images/freeman-logo.jpeg"
									alt="..."
									className={imageClasses}
								/>
							</GridItem>
							<h4 className={cardTitleClasses}>
								Freeman Online Events Platform
								<br />
								<small className={classes.smallTitle}>
									React, Redux, Express, Node, AWS Serverless
								</small>
							</h4>
							<CardBody>
								<p className={classes.description}>
									Online events platform used by hundreds of thousands of users.
									Featuring variety of access options and real-time user-to-user
									interaction, OnlineEventPro served as an online alternative to
									large in-person conventions and symposiums. OEP offered a
									variety of content to the users such as sessions, speakers and
									exhibitors.
								</p>
							</CardBody>
							<CardFooter className={classes.justifyCenter}>
								<Link href="/projects/FreemanOEP">
									<Button round color="primary" className={classes.margin5}>
										See Details
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
