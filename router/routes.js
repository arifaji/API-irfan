'use strict';

module.exports = function(app) {
    var todolist = require('../controller/controller');
    app.route('/api/:formName/:formType').get(todolist.getForm);
    app.route('/api/:formName/:formType/:id').get(todolist.getFormValue);
}