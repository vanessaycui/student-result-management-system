import "./AllResultsTable.css";
import { useEffect, useState } from "react";

export default function AllResultsTable({allResults, allStudents, allCourses}) {
    const results = allResults.map((result, idx) => (
        <tr key={idx}>
            <td>{result.student}</td>
            <td>{result.course}</td>
            <td>{result.grade}</td>
        </tr>
    ))

  return (

    <table className="AllResultsTable">
      <thead>
        <td>Student Name</td>
        <td>Course Name</td>
        <td>Grade</td>
      </thead>
      <tbody>
        {results}
      </tbody>
    </table>

  );
}
