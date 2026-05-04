import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) setTasks(data);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/add-task" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit-task/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
}

export default App;