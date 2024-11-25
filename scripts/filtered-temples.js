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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, US",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, US",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName:"Abidjan Cote d'Ivoire",
        location: "Lot 118 Riviera Attoban  Abidjan",
        dedicated: " 2025, May 25",
        area: 12033,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"
       
    },

    {
        templeName: "Bacolod Philippines",
        location:"Bacolod Airport Access Road",
        dedicated:"Not dedicated yet",
        area:26700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-24089-main.jpg"

    },

    {
        templeName:"Birmingham Alabama ",
        location:"1927 Mount Olive, Alabame 35071 US",
        dedicated:"1999, October 9",
        area: 10700,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-21774.jpg"

    }

    // Loop through temples 
    // display name, location, dedication, total area, imgurl

  ];
  createTempleCard(temples);
  const homeLink = document.querySelector('#home');
  const oldLink =  document.querySelector('#old');
  const newLink = document.querySelector('#new');
  const largeLink = document.querySelector('#large');
  const smallLink = document.querySelector('#small');

  oldLink.addEventListener("click", ()=>{
    let oldAry = temples.filter(y => y.location.includes("Utah"));

    createTempleCard(oldAry);
  });
/*
  largeLink.addEventListener("click", ()=>{
    let lar = temples.filter(x => x.location.includes("Nigeria") );
    createTempleCard(lar);
  });
*/
  largeLink.addEventListener("click", ()=>{
    let largeTemples = temples.filter(temple => temple.area > 90000)
      createTempleCard(largeTemples);
  });

  smallLink.addEventListener("click", ()=>{
    let smallTemples = temples.filter(temple => temple.area < 10000)
      createTempleCard(smallTemples);
  });

  homeLink.addEventListener("click", ()=>{
      createTempleCard(temples);
  });

  newLink.addEventListener("click", ()=>{
    let newT = temples.filter(temp => temp.dedicated < 1900)
    createTempleCard(newT);
  });



function createTempleCard(filteredTemples){
document.querySelector(".album-grid").innerHTML="";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("P");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt",`${temple.templeName} Temple` );
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

       document.querySelector(".album-grid").appendChild(card);
        
    })
}