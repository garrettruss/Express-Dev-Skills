const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');

// require the Skills model
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);

// note that we'll need to define routes here later

module.exports = router;