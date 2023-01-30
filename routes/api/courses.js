var router = require('express').Router();
var coursesCtrl = require('../../controllers/api/courses')

router.get('/courses', coursesCtrl.index)
router.post('/courses', coursesCtrl.create)

module.exports = router;
