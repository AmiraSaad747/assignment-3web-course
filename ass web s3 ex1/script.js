//Synchronous Execution
console.log("Start");
console.log("Middle");
console.log("End");
// calls another function 
console.log("*******************************")
function second(){
console.log("step 2")
}
function first(){
console.log("step 1")
second();
console.log("step 3")
}
first();
//performs two or more calculations sequentially and prints the results.
console.log("*******************************")
let a=10;
let b=20;
let sum =a+b;
console.log("sum=",sum)
let multiplication=a*b;
console.log("multiplication=",multiplication)
let substraction=a-b;
console.log("substraction=",substraction)
//function flow where one function depends
console.log("*******************************")
function add(a,b){
    return a+b;
}
function new1(num){
    return num*2
}
let result=add(1,4);//5
let fresult=new1(result);//5*2=10
console.log("the final result=",fresult);