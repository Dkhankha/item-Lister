// let submit=document.querySelector('input[type=submit]');
// submit.value = 'send';
// let input=document.querySelector('input');
// input.value = 'hello world';

let secItem = document.querySelector('.list-group-item:nth-child(2)');
secItem.style.backgroundColor = 'green';
let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0; i<odd.length; i++){
odd[i].style.backgroundColor = '#ccc';
}
// third is also grey in color but we choose 3rd as display none is it cant appear//