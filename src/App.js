import './App.css';
import EvaluationForm from './Components/EvaluationForm'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <EvaluationForm useCarousel={true}/>
    </div>
  );
}

export default App;
