'use strict';

module.exports = function(app) {
    var todolist = require('../controller/controller');
    app.route('/api/:formName/:formType').get(todolist.getForm);
    app.route('/api/:formName/:formType/:id').get(todolist.getFormValue);
    app.route('/api/:tableName/:id').put(todolist.updateData);
    app.route('/api/:tableName/:customerGroup').post(todolist.insert);
}