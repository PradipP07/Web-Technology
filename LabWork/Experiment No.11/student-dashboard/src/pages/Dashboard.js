import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Dashboard() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Students: {students.length}</p>
    </div>
  );
}

export default Dashboard;