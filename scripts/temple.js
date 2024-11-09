const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;


let modify = document.lastModified;
document.getElementById("lastModified").innerHTML = modify;

// store the selected element that we need in variables
const mainnav = document.querySelector('.navigation');
const tempbutton = document.querySelector('#menu');

// Add  click event listener to the button 
// Add a click event listener to the main menu (mainnav)

tempbutton.addEventListener('click', () => {
mainnav .classList.toggle('show');
tempbutton.classList.toggle('show');
});