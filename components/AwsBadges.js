import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/goalsStyle';
import GridContainer from './GridContainer';
import GridItem from './GridItem';

const useStyles = makeStyles(styles);

export default function AwsBadges() {
	const classes = useStyles();

	return (
		<GridContainer justify="center" direction="row">
			<GridItem className={classes.awsBadgeItem}>
				<a
					href="https://www.credly.com/badges/26480d88-e5c6-430b-a880-af5289fa29a9/public_url"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/images/aws-certified-solutions-architect-associate.png"
						alt="AWS Certified Solutions Architect - Associate"
						className={classes.awsBadgeImg}
					/>
				</a>
			</GridItem>
			<GridItem className={classes.awsBadgeItem}>
				<a
					href="https://www.credly.com/badges/0ba8668f-5377-4fc0-b28e-b8bace69e9ee/public_url"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/images/aws-certified-developer-associate.png"
						alt="AWS Certified Developer - Associate"
						className={classes.awsBadgeImg}
					/>
				</a>
			</GridItem>
			<GridItem className={classes.awsBadgeItem}>
				<a
					href="https://www.credly.com/badges/8e8b6a0d-2e2b-4513-9567-e74b258d22d2/public_url"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/images/aws-certified-cloud-practitioner.png"
						alt="AWS Certified Cloud Practitioner"
						className={classes.awsBadgeImg}
					/>
				</a>
			</GridItem>
		</GridContainer>
	);
}
