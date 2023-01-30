import "./AllCoursesTable.css";
import { useEffect, useState } from "react";

export default function AllCoursessTable({allCourses}) {

    const courses= allCourses.map((course, idx) => (
        <tr key={idx}>
            <td>{course.courseName}</td>
        </tr>
    ))

  return (

    <table className="AllCoursesTable">
      <thead>
        <td>Course Title</td>
      </thead>
      <tbody>
        {courses}
      </tbody>
    </table>

  );
}
