import "./App.css";
import EvaluationForm from "./Components/EvaluationForm";
import Sidebar from "./Components/Environment/Sidebar";
import SideMenu from "./Components/Environment/SideMenu";
import { createUseStyles } from "react-jss";

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
    minWidth: 125,
    visibility: "hidden",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.container}>
        <div className={classes.spaceHolderMenu} />
        <Sidebar />
        <SideMenu />
        <EvaluationForm useCarousel={true} />
        <div className={classes.spaceHolderMenu} />
      </div>
    </div>
  );
}

export default App;
