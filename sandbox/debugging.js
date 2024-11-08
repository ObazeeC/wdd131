/*const PI = 3.14;
//const radius = 3; produces errors, cannot reasign const
//let radius = 3;
let area = 0;
//area = radius * radius * PI;
//radius = 4;
//area = radius * radius * PI;
//console.log("Area2:",area);

// Refactor our code, take out area variable and pass it
function circleArea(radius){
    const area = radius * PI
}
area = circleArea(3);
console.log("Area:", area);*/

const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius* radius * PI;
  return area;
}
area = circleArea(3);
console.log("Area1:",area);

area = circleArea (4);
console.log("Area2:",area);