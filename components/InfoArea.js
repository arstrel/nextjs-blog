import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import clsx from 'clsx';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from '../styles/infoStyle';

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
	const classes = useStyles();
	const { title, description, iconColor, vertical } = props;
	const iconWrapper = clsx({
		[classes.iconWrapper]: true,
		[classes[iconColor]]: true,
		[classes.iconWrapperVertical]: vertical,
	});
	const iconClasses = clsx({
		[classes.icon]: true,
		[classes.iconVertical]: vertical,
	});
	return (
		<div className={classes.infoArea}>
			<div className={iconWrapper}>
				<props.icon className={iconClasses} />
			</div>
			<div className={classes.descriptionWrapper}>
				<h4 className={classes.title}>{title}</h4>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
}

InfoArea.defaultProps = {
	iconColor: 'gray',
};

InfoArea.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	icon: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	iconColor: PropTypes.oneOf([
		'primary',
		'warning',
		'danger',
		'success',
		'info',
		'rose',
		'gray',
	]),
	vertical: PropTypes.bool,
};
