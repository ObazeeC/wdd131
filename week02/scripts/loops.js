myInfo = {
    name: "Brother T ",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked patato"],
    hobbies:["Reading", "Fishing", "Camping"],
    PlacesLived:[
        {
            place: "Rexburb, ID",
            lenght: "5 years",
        },
        {
            place: "Ammon, ID",
            lenght: "3 years",
        },
        {
            place: "Sandy, UT",
            lenght: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

//Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// Write a function using a .forEach method to loop over an array and output it's content in a <ul>
const foodsElement =document.querySelector('#favorit-foods');
function createandAppendFoodItem(food){
    let favoriteFood = document.createElement('li');
    foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);