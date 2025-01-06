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
    imageUrl: "./images/edo-bride.webp",
    
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

// Picture album

const events = [
{
    event:"tranditional",
    URL: "./images/traditional1.webp",
    alt: "Traditional wedding picture",


},

{
    event:"tranditional",
    URL: "./images/traditional2.webp",
    alt: "Traditional wedding picture",


},
{
    event:"tranditional",
    URL: "./images/traditional3.webp",
    alt: "Traditional wedding picture",


},
{
    event:"tranditional",
    URL: "./images/traditional4.webp",
    alt: "Traditional wedding picture",


},
{
    event:"tranditional",
    URL: "./images/traditional5.webp",
    alt: "Traditional wedding picture",


},
{
    event:"tranditional",
    URL: "./images/traditional6.webp",
    alt: "Traditional wedding picture",


},
{
    event:"tranditional",
    URL: "./images/traditional7.webp",
    alt: "Traditional wedding picture",


},
{
    event:"white1",
    URL: "./images/white1.webp",
    alt: "White wedding picture",


},
{
    event:"white2",
    URL: "./images/white2.webp",
    alt: "white wedding picture",


},
{
    event:"white3",
    URL: "./images/white3.webp",
    alt: "White wedding picture",


},
{
    event:"white4",
    URL: "./images/white4.webp",
    alt: "White wedding picture",


},
{
    event:"white",
    URL: "./images/white5.webp",
    alt: "white wedding picture",


},

{
    event:"glam",
    URL: "./images/glam1.webp",
    alt: "glam picture",

},
{
    event:"glam",
    URL: "./images/glam2.webp",
    alt: "glam picture",


},
{
    event:"glam",
    URL: "./images/glam3.webp",
    alt: "glam picture",


},
{
    event:"glam",
    URL: "./images/glam4.webp",
    alt: "glam picture",


},
{
    event:"glam",
    URL: "./images/glam5.webp",
    alt: "glam picture",


},

{
    event:"glam",
    URL: "./images/glam6.webp",
    alt: "glam picture",


},

{
    event:"nails",
    URL: "./images/nails1.webp",
    alt: "nails picture",


},

{
    event:"nails",
    URL: "./images/nails2.webp",
    alt: "nails picture",


},
{
    event:"nails",
    URL: "./images/nails3.webp",
    alt: "nails picture",


},
{
    event:"nails",
    URL: "./images/nails4.webp",
    alt: "nails picture",


},
{
    event:"nails",
    URL: "./images/nails5.webp",
    alt: "nails picture",


},
{
    event:"nails",
    URL: "./images/nails6.webp",
    alt: "nails picture",


}

];

const evem = [

    {
      imgurl : "./images/dan-maria-200.webp",
      alt:"traditional marriage"
    },
    
    {
        imgurl :  "./images/dan-maria-200.webp",
      alt:"traditional marriage"
    },

    {
        imgurl :  "./images/dan-maria-200.webp",
      alt:"traditional marriage"
    },

    {
        imgurl :  "./images/dan-maria-200.webp",
      alt:"traditional marriage"
    
    },
    ];
    


const trad = document.querySelector('#sect2');


evem.forEach(y=> {
    const eachimg = document.createElement('img');
    eachimg.src = y.imgurl;
    eachimg.alt = y.alt;
    eachimg.setAttribute("loading", "lazy");
    eachimg.setAttribute("width", "300") 
    trad.appendChild(eachimg)
})

