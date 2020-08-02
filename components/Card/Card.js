import React from 'react';
// nodejs library that concatenates classes
import clsx from 'clsx';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '../../styles/cardStyle';

const useStyles = makeStyles(styles);

export default function Card(props) {
	const classes = useStyles();
	const { className, children, plain, carousel, ...rest } = props;
	const cardClasses = clsx({
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardCarousel]: carousel,
		[className]: className !== undefined,
	});
	return (
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	);
}

Card.propTypes = {
	className: PropTypes.string,
	plain: PropTypes.bool,
	carousel: PropTypes.bool,
	children: PropTypes.node,
};
