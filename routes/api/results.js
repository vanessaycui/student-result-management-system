var router = require('express').Router();
var resultsCtrl = require('../../controllers/api/results')

router.get('/results', resultsCtrl.index)
router.post('/results', resultsCtrl.create)

module.exports = router;
