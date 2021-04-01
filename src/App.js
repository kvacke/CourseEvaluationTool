import logo from './logo.svg';
import './App.css';
import EvaluationForm from './Components/EvaluationForm'

function App() {
  return (
    <div className="App">
      <EvaluationForm useCarousel={true}/>
    </div>
  );
}

export default App;
