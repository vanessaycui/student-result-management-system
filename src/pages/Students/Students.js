import "./Students.css";

import * as studentsAPI from "../../utilities/students-api";

import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";
import AllStudentsTable from "../../components/AllStudentsTable/AllStudentsTable";

export default function Students({ allStudents, setAllStudents }) {
  async function addNewStudent(data) {
    let newStudent = await studentsAPI.createStudent(data);
    setAllStudents([...allStudents, newStudent]);
  }

  return (
    <div className="Students">
      <NewStudentForm addNewStudent={addNewStudent} />
      <h1>All Students</h1>
      <AllStudentsTable allStudents={allStudents} />
    </div>
  );
}
