// All it is saying is, 
// Hey, when you're done, call this next. 'Only when you are done'

//hello();

hello(goodbye);
hello(leave);
sum(displayConsole, 3, 5);
sum(displaypage, 3, 5);

/* ---expected output 
       Hello
       Goodbye!

       Delivered output
       Goodbye!
       Hello

       correct this with callback function
*/

// Let's delay our hello so it take a bit longer
/*
function hello(){
    setTimeout(function (){
        console.log("Hello") ;
    }, 4000);
}

function goodbye(){
    console.log("Goodbye!") ;
 }
*/
 // Though Hello is called first, but because it is taking longer to execute, 
 // goodbye will be executed before hello finisces thereby given us an unexpected result
 // call back function corrects this, it forces goodbye to wait until hello is done
 // This is the use of callback function

 // lets rewrite our code, using a callback
 // We pass a function as argument to another function


 function hello(callback){
    setTimeout(function (){
    console.log("Hello");
    callback();
    }, 3000);
 }
// Hello will always complete first before the callback

function leave(){
     console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!") ;
 }



 function sum(callback, x, y){
  let result = x+y;
  callback(result);
 }

 function displayConsole(result){
    console.log(result);
 }

 function displaypage(result){
    document.getElementById("myH2").textContent = result;
 }
 // as a  call back, we will use our display page