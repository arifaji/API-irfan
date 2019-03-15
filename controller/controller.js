var dao = require('../dao/dao');
var response = require('../response/res');

exports.getForm = function(req,res){
    dao.getForm(req.params['formName'],req.params['formType'],function(error,data){
        if(error){
            console.log(error);
            response.err(error,res);
        } else if(req.params['formType']=="Form"){
            response.ok(data,res);
        } else if (req.params['formType']=="List"){
            dao.getAll(function(error,data2){
                if(error){
                    console.log(error);
                    response.err(error,res);
                } else {
                    response.list(data,data2,res);
                }
            })
        }
    })
}

exports.getFormValue= function(req,res){
    dao.getCustomer(req.params['id'],function(error,data){
        if(error){
            console.log(error,res)
        } else{
            dao.getForm(req.params['formName'],req.params['formType'],function(error,data2){
                if(error){
                    console.log(error);
                } else {
                    for(var k in data[0]) {
                        for(var i=0;i<data2.length;i++){
                            if(data2[i].keyfield == k){
                                data2[i].value = data[0][k]
                            }
                        }
                    }
                    response.ok(data2,res);
                }
            })
        }
    })
}
