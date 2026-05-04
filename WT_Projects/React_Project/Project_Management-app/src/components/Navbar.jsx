import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/tasks">Tasks</Link> | 
      <Link to="/add-task">Add Task</Link>
    </nav>
  );
}

export default Navbar;