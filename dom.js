//getelementsbyclassname
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[2].style.background = 'green';
//to change for all item font we should take for loop
for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
// }

//getelementsbytagname
var li = document.getElementsByTagName('list-group-item');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[2].style.background = 'green';
//to change for all item font we should take for loop
for(var i = 0; i < li.length; i++){
    li[i].style.fontWeight = 'bold';











/*queryselector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value =  'Hello world'
var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'blue';
*/