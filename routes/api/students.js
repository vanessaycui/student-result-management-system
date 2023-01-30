var router = require('express').Router();
var studentsCtrl = require('../../controllers/api/students')

router.get('/students', studentsCtrl.index)
router.post('/students', studentsCtrl.create)

module.exports = router;
