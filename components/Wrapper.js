import Header from './Header';
import Parallax from './Parallax';
import Footer from './Footer';
import HeaderLinks from './HeaderLinks';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import stylesProfile from '../styles/profilePage';
import stylesGoals from '../styles/goalsStyle';

const useStyles = makeStyles({ ...stylesGoals, ...stylesProfile });

export default function Wrapper(props) {
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
          height: project ? 350 : 200,
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
