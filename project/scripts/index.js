//NAVIGATION MENU
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Add a click event listener to the hamburger button 
// And use a callback function that toggles the list element's list of classes

// What does toggle mean ? Instead of separate add and remove statements, toggle means add the class if it does not currently exist
// or remove the named class if it does exist. 
//The CSS class rules wil handle the different views, layouts, and displays. JavaScript only applies the class value or not. 

const sec = document.querySelector('#section2')

// Create an array of images
const images = [

{
    imageUrl: "./images/one-of3a.webp",
    alt:"white wedding bride",
    
},

{
    imageUrl: "./images/oneof3b.webp",
    alt:"white wedding smilling bride",

},
{
    imageUrl: "./images/oneoof3c.webp",
    alt:"Traditional glam",

},
{
    imageUrl: "./images/trad (3).JPG",
    alt:"Traditional glam",

},
];

images.forEach(image=> {
    const eachimg = document.createElement('img');
    eachimg.src = image.imageUrl;
    eachimg.alt = image.alt;
    eachimg.setAttribute("loading", "lazy");
    eachimg.setAttribute("width", "300") 
    sec.appendChild(eachimg)
})

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