import "./Courses.css";
import { useEffect, useState } from "react";

import * as coursesAPI from "../../utilities/courses-api"

import NewCourseForm from "../../components/NewCourseForm/NewCourseForm";
import AllCoursesTable from "../../components/AllCoursesTable/AllCoursesTable";

export default function Courses({allCourses, setAllCourses}) {

  useEffect(()=>{
    async function getAllCourses(){
      let courses = await coursesAPI.getAllCourses()
      setAllCourses(courses)

    }
    getAllCourses()
  },[])

  async function addNewCourse(data) {
    let newCourse = await coursesAPI.createCourse(data)
    setAllCourses([...allCourses, newCourse])
  }

  return (
    <div className="Students">
      <NewCourseForm addNewCourse={addNewCourse} />
      <h1>All Courses</h1>
      <AllCoursesTable allCourses={allCourses}/>
    </div>
  );
}
