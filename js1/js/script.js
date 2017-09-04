/**
 * Created by maksc on 15.08.2016.
 */

function showResult(){
    var b = +prompt('Введите число');
    var d = +prompt('Введите степень');
    var result = b;
    for (var i = 1; i < d; i++){
        result = result * b;
    }

    console.log( b + ' в степени ' + d + ' будет ' + result );
}

showResult();
