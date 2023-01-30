import { Routes, Route, Navigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import * as studentsAPI from "../../utilities/students-api"
import * as coursesAPI from "../../utilities/courses-api"
import * as resultsAPI from "../../utilities/results-api"

import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Students from "../../pages/Students/Students";
import Courses from "../../pages/Courses/Courses";
import Results from "../../pages/Results/Results";
import Home from "../../pages/Home/Home"

export default function App() {

  const [allStudents, setAllStudents] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [allResults, setAllResults] = useState([]);

  useEffect(()=>{
    async function getAllStudentsCoursesResults(){
      let students = await studentsAPI.getAllStudents()
      let courses = await coursesAPI.getAllCourses()
      let results = await resultsAPI.getAllResults()
      setAllStudents(students)
      setAllCourses(courses)   
      setAllResults(results)

    }
    getAllStudentsCoursesResults()
  },[])


  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/students" element={<Students allStudents={allStudents} setAllStudents={setAllStudents} />} />
        <Route path="/courses" element={<Courses allCourses={allCourses} setAllCourses={setAllCourses}/>} />
        <Route path="/results" element={<Results allStudents={allStudents} allCourses={allCourses} allResults={allResults} setAllResults={setAllResults}/>} />
        <Route path="/*" element={<Navigate to="/home"></Navigate>} />
      </Routes>
    </main>
  );
}
