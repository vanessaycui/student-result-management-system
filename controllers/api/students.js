const Student= require('../../models/student')

module.exports = {
    index,
    create: createStudent

};

async function index(req,res){
    let students = await Student.find({})
    res.status(200).json(students)
    
}

async function createStudent(req, res){
    let student = new Student(req.body)
    student.save()
    res.status(200).json(student)
}
