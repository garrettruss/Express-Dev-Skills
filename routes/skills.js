const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');

// require the Skills model
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get("/:id/edit", skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);

// note that we'll need to define routes here later

module.exports = router;