module.exports = {
 getAll,
 getOne,
};

const skills = [
 {text: 'HTML', done: true},
 {text: 'Express', done: false},
 {text: 'JavaScript', done: false},
 {text: 'Git', done: true},
 {text: 'jQuery', done: false},
 {text: 'GitHub', done: true},
];

function getAll(id) {
 return skills;
}

// Here's our latest function for this module
function getOne(id) {
 return skills[id];
}