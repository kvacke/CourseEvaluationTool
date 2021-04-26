import { createUseStyles } from "react-jss";
import "./App.css";
import Sidebar from "./Old Evaluation/Environment/Sidebar";
import SideMenu from "./Old Evaluation/Environment/SideMenu";
import OldCourseEval from "./Old Evaluation/OldCourseEval";

const useStyles = createUseStyles({
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
  return (
    <div className="App">
      <div className={classes.container}>
        <div className={classes.spaceHolderBar}></div>
        <div className={classes.spaceHolderMenu}></div>
        <Sidebar />
        <SideMenu />
        <OldCourseEval />
      </div>
    </div>
  );
}

export default App;
