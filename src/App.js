import './App.css';
import Home from './Components/home';
import Login from './Components/login';
import TaskView from './Components/task-view';
import Users from './Components/users';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Tasks" element={<Home />} />
        <Route path="/Tasks/:idTask" element={<TaskView />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
