import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");

form.addEventListener("submit", function(){
    event.preventDefault(); 
    let email = form.email.value;
    let name= form.name.value;
    let last_name= form.last_name.value;
    let password= form.password.value;
    let date= form.date.value;
    let obj = {email, name, last_name, password, date}
   
    fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(obj)
    })
})