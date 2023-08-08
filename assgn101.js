function savedata(event){
event.preventDefault()
let name=document.getElementById("name").value;
let email=document.getElementById('email').value;
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
user_records.push({
    "name":name,
    "email":email
})
localStorage.setItem('users',JSON.stringify(user_records));
}