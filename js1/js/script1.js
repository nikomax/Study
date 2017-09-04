/**
 * Created by maksc on 15.08.2016.
 */

var names = [];
var flag = false;


for (var i = 0; i < 5; i++){
    names[i] = prompt('Введите ' + (i+1) +  ' имя');
}

var b = prompt('Введите Ваше имя');
//for (var j = 0; j < 5; j++) {
//        if (b === names[j]) {
//        flag = true;
//    }
//}
//
//if (flag === true) {
//    alert(b + ', Вы успешно вошли на сайт'');
//} else {
//    alert('Ошибка входа, такого пользователя не существует');
//}

if (names.indexOf(b) != -1){
    alert(b + ', Вы успешно вошли на сайт');
} else {
    alert('Ошибка входа, такого пользователя не существует');
}
