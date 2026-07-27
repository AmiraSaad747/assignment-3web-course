//Write a program that prints "Hello" immediately and "World" after 2 seconds
console.log("Hello");
setTimeout(()=>{
    console.log("world");
},2000);
//Create a function that prints numbers from 1 to 5, each number after 1 second delay.
function printnumber(){
      for(let i=1;i <= 5;i++ ){
    setTimeout(()=>{
        console.log(i);
    },i*1000);
      }
}
printnumber();
//Write a program that shows "Loading..." instantly and "Done" after 3 seconds.
console.log("loading...")
setTimeout(()=>{
   console.log("done") ;
},3000);
//Simulate a delayed message system using setTimeout.
function sendmassage(msg){
          console.log("send_msg")
          setTimeout(()=>{
   console.log("msg_received"+msg) ;
          },2000);
}
sendmassage("hello");