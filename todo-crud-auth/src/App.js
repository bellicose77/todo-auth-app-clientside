
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nabigation from './components/Nabigation/Nabigation';

function App() {
  return (
    <div className="App">
      <Router>
      <Nabigation/>
      </Router>
     
    </div>
  );
}

export default App;
