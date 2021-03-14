
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

function newSkill(req, res) {
 res.render('skills/new');
}

function create(req, res) {
  	  console.log(req.body);
  	  req.body.done = false;
  	  Skill.create(req.body);
  	  res.redirect('/skills');
  	}

function deleteSkill(req, res) {
  //ask the data file to splice out the todo from the array
  Skill.deleteOne(req.params.id);
  //respond wtih a redirect to the index page where we see all the todos minus the deleted todo
  res.redirect('/skills');
};

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { 
    skill,
    skillId: req.params.id,
   });
}

function update(req, res) {
  console.log(req.body);
  // set the done property
  req.body.done = req.body.done === 'on' ? true : false;
  // ask the data file to replace the existing todo object with the updated one 
  Skill.updateOne(req.params.id, req.body);
  // respond with res.redirect
  res.redirect(`/skills/${req.params.id}`);
}


module.exports = {
 index, 
 show,
 new: newSkill,
 create, 
 delete: deleteSkill,
 edit,
 update,
};