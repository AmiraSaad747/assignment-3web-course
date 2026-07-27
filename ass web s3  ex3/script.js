//Write a program using console.log and setTimeout and predict the output before running it
console.log("start");
setTimeout(()=>{
     console.log("timeout");
},1000);
console.log("End");
//Create a code snippet mixing synchronous logs and setTimeout(0)
console.log("A");
setTimeout(()=>{
    console.log("B");
},0);
console.log("C");
//Write a program that demonstrates how JavaScript executes line
console.log("line 1");
setTimeout(()=>{
    console.log("a sync task");
},2000);
console.log("line 2");
console.log("line 3");
//Build a small example showing how async tasks are delayed until
console.log("Start");
setTimeout(() => {
    console.log("Async");
}, 0);
for (let i = 1; i <= 5; i++) {
    console.log("Processing", i);
}
console.log("End");
