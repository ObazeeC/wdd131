/*const currentyear = document.querySelector("#year");
const today = new Date();
currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;*/

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
/*createandAppendOption(products);*/
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  const selectElement = document.querySelector('#productSelect');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);

  });

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");


// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);




