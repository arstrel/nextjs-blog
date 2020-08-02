import Header from "./Header";
import Parallax from "./Parallax";
import Footer from "./Footer";
import HeaderLinks from "./HeaderLinks";
import clsx from "clsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import stylesGoals from "../styles/goalsStyle";

const useStyles = makeStyles(stylesGoals);

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
          height: project ? 250 : 200,
          color: "white",
        }}
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
