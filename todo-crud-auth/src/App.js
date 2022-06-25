
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Home from './components/Home/Home';
import Nabigation from './components/Nabigation/Nabigation';
import ShowTask from './components/ShowTask/ShowTask';

function App() {
  return (
    <div className="App">
      <Router>
      <Nabigation/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/tasks" element={<AddTask/>}/>
        <Route path="/show" element={<ShowTask/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
