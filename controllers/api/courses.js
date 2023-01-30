const Course = require("../../models/course");

module.exports = {
  index,
  create: createCourse,
};

async function index(req, res) {
  let courses = await Course.find({});
  res.status(200).json(courses);
}

async function createCourse(req, res) {
  let course = new Course(req.body);
  course.save();
  res.status(200).json(course);
}
