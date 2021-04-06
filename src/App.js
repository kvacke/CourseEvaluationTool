import './App.css';
import EvaluationForm from './Components/EvaluationForm'
import Sidebar from './Components/Sidebar'
import SideMenu from './Components/SideMenu'

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
