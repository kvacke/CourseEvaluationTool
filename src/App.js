import { createUseStyles } from "react-jss";
import "./App.css";
import Sidebar from "./Old Evaluation/Environment/Sidebar";
import SideMenu from "./Old Evaluation/Environment/SideMenu";
import OldCourseEval from "./Old Evaluation/OldCourseEval";
import { useMediaQuery } from "react-responsive";

const useStyles = createUseStyles({
  mobileView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  uhoh: {
    fontWeight: 500,
    fontSize: 30,
  },
  mobileInfo: {
    marginTop: 20,
    marginBottom: 20,
  },
  signoff: {},
  container: {
    display: "flex",
    flexDirection: "row",
  },
  spaceHolderBar: {
    minWidth: 100,
    visibility: "hidden",
  },
  spaceHolderMenu: {
    minWidth: 115,
    visibility: "hidden",
  },
});

function App() {
  const classes = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <div className="App">
      {isDesktopOrLaptop && (
        <div className={classes.container}>
          <div className={classes.spaceHolderBar}></div>
          <div className={classes.spaceHolderMenu}></div>
          <Sidebar />
          <SideMenu />
          <OldCourseEval />
        </div>
      )}
      {!isDesktopOrLaptop && (
        <div className={classes.mobileView}>
          <div className={classes.uhoh}>Uh oh!</div>
          <div className={classes.mobileInfo}>
            Detta arbete hanterar inte mobilvy på grund av tidsbegränsning.
            Vänligen besök samma länk på en laptop eller stationär dator.
          </div>

          <div className={classes.signoff}>Mvh Viktor och Jens </div>
        </div>
      )}
    </div>
  );
}

export default App;
