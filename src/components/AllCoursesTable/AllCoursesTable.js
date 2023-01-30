import "./AllCoursesTable.css";

export default function AllCoursessTable({ allCourses }) {
  const courses = allCourses.map((course, idx) => (
    <tr key={idx}>
      <td>{course.courseName}</td>
    </tr>
  ));

  return (
    <table className="AllCoursesTable">
      <thead>
        <tr>
          <td>Course Title</td>
        </tr>
      </thead>
      <tbody>{courses}</tbody>
    </table>
  );
}
