const Result= require('../../models/result')
const Student = require('../../models/student')
const Course = require('../../models/course');
const result = require('../../models/result');

module.exports = {
    index,
    create: createResult
};

async function index(req,res){
    let results = await Result.find({}).populate("student").populate("course")
    let modifiedResults = []
    results.forEach(result =>{
        let newresult = {
            student: result.student.firstName + " " +  result.student.familyName,
            course: result.course.courseName,
            grade: result.grade
        }
        modifiedResults.push(newresult)
    })
    res.status(200).json(modifiedResults)
}

async function createResult(req, res){
    let course = await Course.findById(req.body.course)
    let student = await Student.findById(req.body.student)
    let result = new Result(req.body)
    result.save()
    let newResult = {
        student: student.firstName+ " " +  student.familyName,
        course: course.courseName,
        grade: req.body.grade
    }
    res.status(200).json(newResult)
}
