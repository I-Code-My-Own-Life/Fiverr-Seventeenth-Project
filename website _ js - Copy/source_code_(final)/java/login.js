/*const log_username = document.getElementById("log_username")
const reg_username = document.getElementById("reg_username")
const email = document.getElementById("reg_email")
const log_password = document.getElementById("log_password")
const reg_password = document.getElementById("reg_password")
var age = document.getElementById("reg_age").value;
*/

reg_button.addEventListener("click",()=>{
    let userObject = {
        var email = document.getElementById('reg_email').value;
        var username = document.getElementById('reg_username').value;
        var password = document.getElementById('reg_password').value;
        var age = document.getElementById('reg_age').value;

        /*"email": reg_email.value,
        "userName": reg_username.value,
        "password": reg_password.value,
        "age": reg_age.value
        } */

        console.log(userObject);
        const jsonFormat=JSON.stringify(userObject);
        console.log(jsonFormat);

        localStorage.setItem(reg_username.value, jsonFormat);
}})







function signup(e){
    event.preventDefault();

    var email = document.getElementById('reg_email').value;
    var username = document.getElementById('reg_username').value;
    var password = document.getElementById('reg_password').value;
    var age = document.getElementById('reg_age').value;

    var user = {
        email: reg_email,
        username: reg_username
        password: reg_password
    };


var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user has been added');
}


function loginFunc(x){
    event.preventDefault();
    
    var username = document.getElementById('log_username').value;
    var password = document.getElementById('log_password').value;
    var result = document.getElementById('result').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data)

    if (user == null) {
        result.innerHTML = 'wrong username'
    }
    else if (username == data.username && pass == data.password){
        result.innerHTML = 'logged in';
    }
    else{
        result.innerHTML = 'wrong password';
    }

}



