/**
 * Created by maksc on 23.08.2016.
 */
var wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.appendChild(wrapper);

var list = document.createElement('ol');
list.className = "list";
wrapper.appendChild(list);


var head = document.createElement('p');
head.className = "head";
head.innerHTML = "Тест по программированию";
list.appendChild(head);

var item1 = document.createElement('li');
item1.className = "item1, item";
item1.innerHTML = "<h5>Вопрос №1</h5>";
list.appendChild(item1);

var variant1 = document.createElement('p');
variant1.className = "variant";
item1.appendChild(variant1);

var input = document.createElement('input');
input.type = "checkbox";
variant1.appendChild(input);

var variantText = document.createElement('span');
variantText.className = "variant-text";
variantText.innerHTML = "Вариант ответа №1";
variant1.appendChild(variantText);

var variant2 = variant1.cloneNode(true);
variant2.querySelector('span').innerHTML = "Вариант ответа №2";
variant1.parentNode.insertBefore(variant2, variant1.nextSibling);

var variant3 = variant2.cloneNode(true);
variant3.querySelector('span').innerHTML = "Вариант ответа №3";
variant2.parentNode.insertBefore(variant3, variant2.nextSibling);

var item2 = item1.cloneNode(true);
item2.querySelector('h5').innerHTML = "Вопрос №2";
item1.parentNode.insertBefore(item2, item1.nextSibling);

var item3 = item2.cloneNode(true);
item3.querySelector('h5').innerHTML = "Вопрос №2";
item2.parentNode.insertBefore(item3, item2.nextSibling);

var button = document.createElement('button');
button.className = "button";
button.innerHTML = "Проверить мои результаты";
wrapper.appendChild(button);