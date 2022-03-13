
var insert_data = function (event) {
    var carid= document.getElementById('carid').value;
    var make=  document.getElementById('make').value;
    var model= document.getElementById('model').value;
    var year= document.getElementById('year').value;
    var input_json ={
        'car_id': carid,
        'make': make,
        'model': model,
        'year': year
    };
    $.ajax({
        url: '/insertdata',
        data: JSON.stringify(input_json),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        type: 'POST',
        success: function(response) {
            alert(response.output);
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

var update_data = function (event) {
    var carid= document.getElementById('carid').value;
    var make=  document.getElementById('make').value;
    var model= document.getElementById('model').value;
    var year= document.getElementById('year').value;
    var input_json ={
        'car_id': carid,
        'make': make,
        'model': model,
        'year': year
    };
    $.ajax({
        url: '/updatedata',
        data: JSON.stringify(input_json),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        type: 'POST',
        success: function(response) {
            alert(response.output);
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

var view_data = function (event) {
    var carid= document.getElementById('carid').value;
    var input_json ={
        'car_id': carid
    };
    $.ajax({
        url: '/viewdata',
        data: JSON.stringify(input_json),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        type: 'POST',
        success: function (response) {
            console.log(response.make)
            console.log(response.model)
            console.log(response.year)
            var trHTML = '';
            
            trHTML += '<tr><td>' + response.make + '</td><td>' + response.model + '</td><td>' + response.year+ '</td></tr>';
           
            $('#records_table').append(trHTML);
        },
        error: function(error) {
            console.log(error);
        }
    });
}
