import './App.css';
import EvaluationForm from './Components/EvaluationForm'
import Sidebar from './Components/Environment/Sidebar'
import SideMenu from './Components/Environment/SideMenu'
import OldCourseEval from './Old Evaluation/OldCourseEval'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <SideMenu/>
      <OldCourseEval/>
    </div>
  );
}

export default App;
