
module.exports = {
 index, 
 show,
 new: newTodo,
};

const Skill = require('../models/skill');

function index(req, res) {
 res.render('skills/index', {
   skills: Skill.getAll(),
   time: req.time 
 });
}

function show(req, res) {
 res.render('skills/show', {
   skill: Skill.getOne(req.params.id),
   skillNum: parseInt(req.params.id) + 1
 });
}

function newTodo(req, res) {
 res.render('skills/new');
}