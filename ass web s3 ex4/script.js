function new_msg(name,callback){
   console.log("Hello"+name);
   callback();
}
function say(){
    console.log("Welcome to website")
}
new_msg("ali",say);
//Write a calculator function that takes two numbers and a callback
function calculator(a,b,opration){
    return opration(a,b);
}
function add(x,y){
    return x+y;
}
function subs(x,y){
    return x-y;
}
function multi(x,y){
    return x*y;
}
console.log(calculator(10, 5, add));
console.log(calculator(10, 5, subs));
console.log(calculator(10, 5, multi));
//Create a function that simulates loading data and calls a callback
function loaddata(callback) {
    console.log("Loading data...");

    setTimeout(() => {
        console.log("Data loaded");
        callback();
    }, 3000);
}

function showData() {
    console.log("Displaying data");
}
loaddata(showData);
//Build a simple authentication flow using callbacks (login → success
function login(username, password, callback) {
    console.log("Checking credentials...");

    if (username === "ali" && password === "1234") {
        callback();
    } else {
        console.log("Login failed");
    }
}

function loginSuccess() {
    console.log("Login successful");
    website();
}

function website() {
    console.log("Welcome to website");
}

login("ali", "1234", loginSuccess);













