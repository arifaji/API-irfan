var connection = require('../db/dbcon');
const sqlGetForm = `SELECT field.keyfield,field.label,field.datatype,field.required FROM mapping 
                    INNER JOIN form on mapping.form_id=form.form_id 
                    INNER JOIN field on mapping.field_id=field.field_id 
                    WHERE form.form_name=? AND form.type=? AND form.is_active='1' ORDER BY mapping.order_no ASC`
const sqlGetCustomer = `SELECT name,pob,dob,nik,mmn,mob,npwp FROM customer WHERE data_id=?`;
const sqlGetCustomerAll = `SELECT data_id,name,dob,pob,nik,mmn,mob,npwp FROM customer`;


exports.getForm = function(formName,formType,callback) {
    connection.query(sqlGetForm,[formName,formType],function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.getAll = function(callback){
    connection.query(sqlGetCustomerAll,function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.getCustomer = function(id,callback){
    connection.query(sqlGetCustomer,id,function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}