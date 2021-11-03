/**
1. Create an array called softwareEngineeringStudents and add 10 students from your class in the array. Then, print the softwareEngineeringStudents to the console using console.log.
 */


let softwareEngineeringStudents = ["Tomiwa","Emmanuel","Tosin","Kingsley","Romeo", "Stephen", "Salim", "Lanre","Blossom","Pere-Ebi"]
console.log(softwareEngineeringStudents);



/**
 * 
 2. The space western TV drama Firefly premiered in the United States on September 20, 2002. Although the show only featured fourteen episodes and was canceled during its first season, it continues to remain popular today with a growing fan base. In the show, the captain Mal, played by Nathan Fillion, leads a crew of renegades on the spaceship Serenity.

Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . You don't need to type out the actual strings, just use the provided variables.

 */

let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic]

console.log(crew)




/**
 *  3. Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
 */

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 3.0
prices[2] = 29.2
prices[6] = 94.9

console.log(prices);


/**
 4. James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:
 */

 const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

 rainbow.splice(2, 1, "yellow", "Green")


  rainbow.splice(5, 0, "purple")

 console.log(rainbow)

/**
 * 
 Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
 */

 const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(){
  if(team.length == 7){
    true
  } else{
    false
  }

}

console.log(team.length)


/**
 * 6. In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.
 */


let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

let doctor = "Simon";
let sister = "River";
let shepherd = "Book";

crew.push(doctor, sister, shepherd)

console.log(crew)