/*function submitData(){

    let email = document.getElementById('reg_email').value;
    let username = document.getElementById('reg_username').value;
    let password = document.getElementById('reg_password').value;
    let age = document.getElementById('reg_age').value;

    console.log("User: " + username + " has been registered");

} */





function signup(){
    event.preventDefault();

    var email = document.getElementById('reg_email').value;
    var username = document.getElementById('reg_username').value;
    var password = document.getElementById('reg_password').value;
    var age = document.getElementById('reg_age').value;

    
    var user = {
        email: reg_email,
        username: reg_username,
        password: reg_password,
        age: reg_age
    };


var json = JSON.stringify(user);
result.innerHTML =  JSON.stringify(user)
localStorage.setItem(username, json);
console.log('user has been added');
}

function loginFunc(){
    event.preventDefault();
    
    var log_username = document.getElementById('log_username').value;
    var log_password = document.getElementById('log_password').value;
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