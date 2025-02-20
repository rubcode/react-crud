import './App.css';
import Home from './Components/home';
import TaskView from './Components/task-view';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idTask" element={<TaskView />} />
      </Routes>
    </Router>
  );
}

export default App;
