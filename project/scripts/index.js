// Store the selected element that we are going to use
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button 
// And use a callback function that toggles the list element's list of classes
hambutton.addEventListener('click', () =>{
mainnav.classList.toggle('show');
hambutton.classList.toggle('show');

});
// What does toggle mean ? Instead of separate add and remove statements, toggle means add the class if it does not currently exist
// or remove the named class if it does exist. 
//The CSS class rules wil handle the different views, layouts, and displays. JavaScript only applies the class value or not. 

const sec = document.querySelector('#section2')

// Create an array of images
const images = [

{
    imageUrl: "./images/bride2.png",
    alt:"Bride",
    
},

{
    imageUrl: "./images/bride2.png",
    alt:"1232",

},
{
    imageUrl: "./images/bride.png",
    alt:"1232",

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
