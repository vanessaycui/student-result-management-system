import { useState, useEffect } from "react";
import "./NewResultForm.css";

export default function NewResultForm({
  addNewResult,
  allStudents,
  allCourses,
}) {
  const [newResult, setNewResult] = useState({
    student: "",
    course: "",
    grade: "",
    message: "",
  });

  let studentList = allStudents.map((student, idx) => (
    <option key={idx} value={student._id}>
      {student.firstName + " " + student.familyName}
    </option>
  ));

  let courseList = allCourses.map((course, idx) => (
    <option key={idx} value={course._id}>
      {course.courseName}
    </option>
  ));

  function handleChange(evt) {
    setNewResult({ ...newResult, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    let resultData = { ...newResult };
    delete resultData.message;
    addNewResult(resultData);
    setNewResult({
      student: "",
      course: "",
      grade: "",
      message: "Student Score Successfully Submitted",
    });
    removeMessage();
  }

  function removeMessage() {
    setTimeout(() => {
      setNewResult({ student: "", course: "", grade: "", message: "" });
    }, 2500);
  }

  return (
    <form className="NewResultForm" onSubmit={handleSubmit}>
      <h2>Add New Student Score:</h2>
      
      <div>
        <label>Course: </label>
        <select
          name="course"
          value={newResult.course}
          required
          onChange={handleChange}
        >
          <option value=""> ------- </option>
          {courseList}
        </select>
      </div>
      <div>
        <label> Student:</label>
        <select
          name="student"
          value={newResult.student}
          required
          onChange={handleChange}
        >
          <option value=""> ------- </option>
          {studentList}
        </select>
      </div>
      <div>
        <label>Score:</label>
        <select
          name="grade"
          value={newResult.grade}
          required
          onChange={handleChange}
        >
          <option value=""> ------- </option>
          <option value="A"> A </option>
          <option value="B"> B </option>
          <option value="C"> C </option>
          <option value="D"> D </option>
          <option value="E"> E </option>
          <option value="F"> F </option>
        </select>
      </div>
      <button className="btn-submit" type="submit">
        Submit
      </button>
      <div>
        <p>{newResult.message}</p>
      </div>
    </form>
  );
}
