// let ul=document.querySelector('.items');
// ul.firstElementChild.textContent="Hindus"
// ul.firstElementChild.style.fontWeight='bold'
// ul.firstElementChild.style.backgroundColor='orange'
// ul.lastElementChild.style.fontWeight='bold'
// ul.lastElementChild.style.backgroundColor='green'
// ul.lastElementChild.textContent='Muslims'
// ul.children[1].style.backgroundColor='white'
// ul.children[1].textContent='Others'
// ul.children[1].style.fontWeight='bold'
// ul.firstElementChild.innerHTML='<h1>Hello</h1>'
// let button=document.querySelector('.btn');
// let flag = 1;
// button.addEventListener('click', (e)=>{
//     e.preventDefault()
//     if(flag==1){
//     button.style.background='red';
//     flag=0;
//     }else{
//         button.style.background='blue';
//         flag=1;
//     }
//})

// button.addEventListener('click', function(e){
//     e.preventDefault()
//     //button.style.background="tomato";
//     button.innerHTML="<h1>SUBMIT</h1>"
// })
// let form=document.getElementById('my-form');
// form.addEventListener("mouseover", (e)=>{
//     e.preventDefault()
//     form.style.backgroundColor='#ccc'
//     document.querySelector('body').classList.add('bg-dark');
// })

let form=document.getElementById('my-form');
let nameInput=document.getElementById('name');
let emailInput=document.getElementById('email');
let msg=document.getElementById('msg');
let userList=document.querySelector('#users');
form.addEventListener('submit', onSubmit);
    function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='Please enter the fields'
    }else{
       let li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       userList.appendChild(li);
       //let user_records=[];
       user_records=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):{}
       user_records={
        'name':nameInput.value,
        'email':emailInput.value
       }

       localStorage.setItem('users',JSON.stringify(user_records))
       nameInput.value='';
       emailInput.value='';
    }
}

