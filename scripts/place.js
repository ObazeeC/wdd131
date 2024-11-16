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