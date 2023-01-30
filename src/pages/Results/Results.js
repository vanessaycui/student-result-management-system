import "./Results.css";
import { useEffect, useState } from "react";

import * as resultsAPI from "../../utilities/results-api"

import NewResultForm from "../../components/NewResultForm/NewResultForm";
import AllResultsTable from "../../components/AllResultsTable/AllResultsTable";

export default function Results({allStudents, allCourses, allResults, setAllResults}) {
  
  async function addNewResult(data) {
    let newResult= await resultsAPI.createResult(data)
    setAllResults([...allResults, newResult])
  }

  return (
    <div className="Results">
      <NewResultForm addNewResult={addNewResult} allStudents={allStudents} allCourses={allCourses}/>
      <h1>All Results</h1>
      <AllResultsTable allResults={allResults}allStudents={allStudents} allCourses={allCourses}/>
    </div>
  );
}
