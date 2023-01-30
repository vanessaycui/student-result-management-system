import "./AllStudentsTable.css";

export default function AllStudentsTable({ allStudents }) {
  const students = allStudents.map((student, idx) => (
    <tr key={idx}>
      <td>{student.firstName}</td>
      <td>{student.familyName}</td>
      <td>{student.dateOfBirth.slice(0, 10)}</td>
    </tr>
  ));

  return (
    <table className="AllStudentsTable">
      <thead>
        <tr>
          <td>First Name</td>
          <td>Family Name</td>
          <td>Date of Birth</td>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students
        ) : (
          <tr>
            <td></td>
            <td>No Record of Students</td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
