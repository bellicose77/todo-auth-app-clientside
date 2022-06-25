
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Nabigation from './components/Nabigation/Nabigation';

function App() {
  return (
    <div className="App">
      <Router>
      <Nabigation/>
      <Routes>
        
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
