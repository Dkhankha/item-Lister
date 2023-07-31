let newDiv = document.createElement('div');
newDiv.className ='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello Div');
let newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
let container = document.querySelector('header .container');
let h1=document.querySelector('header h1');
console.log(newDiv);


newDiv.style.fontSize ='30px';
container.insertBefore(newDiv, h1);


let ul=document.querySelector('#items');
ul.prepend("Hello World");

//i only upload js file on sharpner because i submit html and js both marks will be deducted//
//html file is same as previous//
