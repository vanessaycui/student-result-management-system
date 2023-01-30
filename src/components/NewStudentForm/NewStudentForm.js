import { useState } from "react";
import "./NewStudentForm.css";

export default function NewStudentForm({ addNewStudent }) {
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    familyName: "",
    dateOfBirth: "",
    message: "",
  });

  const today = new Date();
  const minAge = new Date(
    today.getFullYear() - 10,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .slice(0, 10);

  function handleChange(evt) {
    setNewStudent({ ...newStudent, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    let studentData = newStudent;
    delete studentData.message;
    addNewStudent(studentData);
    setNewStudent({
      firstName: "",
      familyName: "",
      dateOfBirth: "",
      message: "New Student Successfully Added",
    });
    removeMessage();
  }

  function removeMessage() {
    setTimeout(() => {
      setNewStudent({
        firstName: "",
        familyName: "",
        dateOfBirth: "",
        message: "",
      });
    }, 2500);
  }

  return (
    <form className="NewStudentForm" onSubmit={handleSubmit}>
      <h2>Add a New Student:</h2>
      <div>
        <label> First Name :</label>
        <input
          type="text"
          name="firstName"
          value={newStudent.firstName}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Family Name: </label>
        <input
          type="text"
          name="familyName"
          value={newStudent.familyName}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={newStudent.dateOfBirth}
          max={minAge}
          required
          onChange={handleChange}
        />
      </div>
      <button className="btn-submit" type="submit">
        Submit
      </button>
      <div>
        <p>{newStudent.message}</p>
      </div>
    </form>
  );
}
