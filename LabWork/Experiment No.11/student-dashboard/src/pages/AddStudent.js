import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudent() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, course });
    setName("");
    setCourse("");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;