import './App.css';
import Home from './Components/home';
import TaskView from './Components/TaskView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Task/" element={<TaskView />} />
      </Routes>
    </Router>
  );
}

export default App;
