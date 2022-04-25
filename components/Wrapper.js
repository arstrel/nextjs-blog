import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Parallax from './Parallax';
import Footer from './Footer';
import HeaderLinks from './HeaderLinks';

import stylesGoals from '../styles/goalsStyle';

const useStyles = makeStyles(stylesGoals);

export default function Wrapper({
	children,
	small,
	filter,
	imageUrl,
	project,
	...rest
}) {
	const classes = useStyles();
	return (
		<div>
			<Header
				color="semiTransparent"
				brand="Artemio.tech"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: project ? 250 : 200,
					color: 'white',
				}}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...rest}
			/>
			<Parallax small={small} filter={filter} imageUrl={imageUrl}>
				{project}
			</Parallax>
			<div className={clsx(classes.main, classes.mainRaised)}>
				<div>{children}</div>
			</div>
			<Footer />
		</div>
	);
}
