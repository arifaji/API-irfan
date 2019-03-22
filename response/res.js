exports.ok = function(values,res){
    
    var arr=[];
    var column=[];

    for(var i =0;i<values.length;i++) {
        arr.push(values[i]);
        if((i+1)%values[0].columns==0){
            column.push({column:arr});
            arr=[];
        }
        if(i==values.length-1) {
            if(arr.length===0){
               break; 
            }
            column.push({column:arr})
        }
    }


    var data = {
        form:{
            row:column
        }
    }
    
    res.xml(data);
    res.end();
}

exports.success = function(values,res){
    var data ={
        values : values
    }

    res.xml(data);
    res.end();
}

exports.err = function(values,res){
    var data = {
        form: {
            row:{
                column:values
            }
        }
    }
    res.xml(data);
    res.end();
}

exports.list = function(values,values2,res){

    var arr= [{column:values}];

    var filterArray = [];

    for(var i=0;i<values.length;i++){
        filterArray.push(values[i].keyfield); 
    }

    result={};

    for(var i =0;i<values2.length;i++) {
        for(var type in values2[i]) {
            if(filterArray.indexOf(type)>-1) {
                result[type] = values2[i][type];
            }
        }
        result.data_id = values2[i].data_id;
        arr.push({column:result});
        result={};
    }
    
    var data = {
        form :{
            row : arr
        }
    }
    res.xml(data);
    res.end();
}

    