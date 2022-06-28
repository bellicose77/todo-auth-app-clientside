
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Home from './components/Home/Home';
import Nabigation from './components/Nabigation/Nabigation';
import ShowTask from './components/ShowTask/ShowTask';
import UpdateTodo from './components/UpdateTodo/UpdateTodo';
import UserLogin from './components/UserLogin/UserLogin';

function App() {
  return (
    <div className="App">
     
      <Nabigation/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/tasks" element={<AddTask/>}/>
        <Route path="/show" element={<ShowTask/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/update/:id" element={<UpdateTodo/>}/>
      </Routes>
     
     
    </div>
  );
}

export default App;
