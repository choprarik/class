'use strict';
module.exports = function(app) {
  const students = require('../controllers/studentController');

  // todoList Routes
  app.route('/students')
    .get(students.list_all_students)
    .post(students.add_a_student);


  app.route('/students/:studentId')
    .get(students.get_a_student)
    .put(students.update_a_student)
    .delete(students.remove_a_student);

};
