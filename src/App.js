import './App.css';
import EvaluationForm from './Components/EvaluationForm'
import Sidebar from './Components/Environment/Sidebar'
import SideMenu from './Components/Environment/SideMenu'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <SideMenu/>
      <EvaluationForm useCarousel={true}/>
    </div>
  );
}

export default App;
