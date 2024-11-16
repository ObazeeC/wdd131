const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

/*
const date = new Date()
let year = date.getFullYear();
document.querySelector("#currentyear");
*/


let modify = document.lastModified;
document.getElementById("lastModified").innerHTML = modify;

const temp = 34;
const wind = 6.6;

function calculateWindChill(temp, wind){
    if (temp <= 10 && wind >=4.8){
       return (13.12 + 0.6215 * temp +(0.3965 * temp - 11.37) * Math.pow(wind, 0.16)).toFixed(2);
    }
    
  // return  35.74 + 0.6215 * temp*(0.4275 * temp - 35.75)* wind**0.16;
    
}

const weather = document.querySelector('#weather');
weather.textContent = calculateWindChill(3, 5);




















