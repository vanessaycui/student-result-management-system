import {useState} from 'react'
import './NewCourseForm.css'


export default function NewCourseForm({addNewCourse}) {
    const [newCourse, setNewCourse] = useState({
        courseName:"",
        message:""
    })

    function handleChange(evt){
        setNewCourse({...newCourse, [evt.target.name]:evt.target.value})
    }

    function handleSubmit(evt){
        evt.preventDefault()
        let courseData = newCourse
        delete courseData.message
        addNewCourse(courseData)
        setNewCourse({
            courseName:"",
            message:"New Course Successfully Submitted"
        })
        removeMessage()
    }

    function removeMessage(){
        setTimeout(()=>{
            setNewCourse({
                courseName:"",
                message:""
            })

        }, 2000)
        
    }

  return (
      <form className='NewCourseForm' onSubmit={handleSubmit}>
        <h2>Add a New Course:</h2>
        <div>
          <label> Course Name:</label>
          <input type="text" name="courseName" value={newCourse.courseName}required onChange={handleChange}/>
        </div>
        
        <button className="btn-submit" type="submit">Add </button>
        <div>
            <p>{newCourse.message}</p>
        </div>
      </form>
  );
}
