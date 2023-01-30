import "./AllStudentsTable.css";
import { useEffect, useState } from "react";

export default function AllStudentsTable({allStudents}) {

    const students = allStudents.map((student, idx) => (
        <tr key={idx}>
            <td>{student.firstName}</td>
            <td>{student.familyName}</td>
            <td>{student.dateOfBirth.slice(0,10)}</td>
        </tr>
    ))

  return (

    <table className="AllStudentsTable">
      <thead>
        <td>First Name</td>
        <td>Family Name</td>
        <td>Date of Birth</td>
      </thead>
      <tbody>
        {students}
      </tbody>
    </table>

  );
}
