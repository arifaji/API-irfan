var connection = require('../db/dbcon');
const sqlGetForm = `SELECT field.keyfield,field.label,field.datatype,field.required FROM mapping 
                    INNER JOIN form on mapping.form_id=form.form_id 
                    INNER JOIN field on mapping.field_id=field.field_id 
                    WHERE form.form_name=? AND form.type=? AND form.is_active='1' ORDER BY mapping.order_no ASC`;
const sqlGetCustomer = `SELECT name,pob,dob,nik,mmn,mob,npwp FROM customer WHERE data_id=?`;
const sqlGetCustomerAll = `SELECT data_id,name,dob,pob,nik,mmn,mob,npwp FROM customer WHERE customer_group=? and is_active='1'`;
const sqlUpdate = 'UPDATE ?? SET ? WHERE data_id=?';
const sqlInsert = 'INSERT INTO ?? SET customer_group=?,?';
const sqlSearch = `SELECT data_id,name,dob,pob,nik,mmn,mob,npwp FROM customer WHERE nik = ? AND customer_group=? AND is_active='1'`;


exports.getForm = function(formName,formType,callback) {
    connection.query(sqlGetForm,[formName,formType],function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.search = function(nik,formName,callback){
    connection.query(sqlSearch,[nik,formName],function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.updateData = function(tableName,data,id,callback){
    connection.query(sqlUpdate,[tableName,data,id],function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.insert = function(tableName,customerGroup,data,callback){
    connection.query(sqlInsert,[tableName,customerGroup,data],function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.getAll = function(formName,callback){
    connection.query(sqlGetCustomerAll,formName,function(error,data){
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