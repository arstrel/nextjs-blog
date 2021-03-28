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
					href="https://www.youracclaim.com/badges/0ba8668f-5377-4fc0-b28e-b8bace69e9ee/public_url"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/images/aws-certified-developer-associate.png"
						alt="AWS Certified Developer"
						className={classes.awsBadgeImg}
					/>
				</a>
			</GridItem>
			<GridItem className={classes.awsBadgeItem}>
				<a
					href="https://www.youracclaim.com/badges/745d4550-0761-4185-ad08-7a8d18e6c0dc/public_url"
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
