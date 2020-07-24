import Header from './Header.js';
import Parallax from './Parallax.js';
import Footer from './Footer.js';
import HeaderLinks from './HeaderLinks.js';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import stylesProfile from '../styles/profilePage.js';
import stylesGoals from '../styles/goalsStyle.js';

const useStyles = makeStyles({ ...stylesGoals, ...stylesProfile });

export default function Layout(props) {
  const classes = useStyles();
  const { children, small, filter, imageUrl, project, ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Artemio.tech"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: project ? 400 : 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small={small} filter={filter} imageUrl={imageUrl}>
        {project}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
