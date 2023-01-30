import "./AllResultsTable.css";

export default function AllResultsTable({
  allResults,
  allStudents,
  allCourses,
}) {
  const results = allResults.map((result, idx) => (
    <tr key={idx}>
      <td>{result.course}</td>
      <td>{result.student}</td>
      <td>{result.grade}</td>
    </tr>
  ));

  return (
    <table className="AllResultsTable">
      <thead>
        <tr>
          <td>Course</td>
          <td>Student</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>{results}</tbody>
    </table>
  );
}
