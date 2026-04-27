import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>Students List</h2>
      {students.map((s, index) => (
        <div key={index}>
          <p>{s.name} - {s.course}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;