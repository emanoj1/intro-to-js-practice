function exampleStuff(){

// Outout variable
let world = "Earth"

console.log(`Hello ${world}, I am Manoj!`);
console.log ("Hello " + "world!")

// Arrays
let favouriteFruits = [
    "mango",
    "pear",
    "papaya"
];

console.log(favouriteFruits)

favouriteFruits.forEach(fruit =>{
    console.log("I love " + fruit)
});

// Nested Array
let person = {
    name: "manoj",
    codingLanguage: ["Python", "Javascript"],
    hobbies: [
        {
            name: "vlogs",
            skill: 10,
        },
        {
            name: "sketching",
            skill: 10,
        }
    ] 
}

console.log(person)

// Matchcase
let weather = "sunny";

switch (weather) {
    case "sunny":
        console.log("sunny is nice")
        break;
    case "rainy":
        console.log("100 ml today!")
        break;
    default:
        console.log("Oh that weather")
        break;
}
}

// FUNCTION AND SORTING
let pokemonTeam = [
    "pikachu",
    "squirtle",
    "charmander",
    "mew",
];

// OPTION 1 - only sort
function logTheTeam(){
    sortedTeam = pokemonTeam.sort();

    for (const pokemon of sortedTeam) {
       console.log(pokemon)
    }
        
    }

logTheTeam();

// OPTION 2 - sort with index value
function logTheTeam2(){
    sortedTeam = pokemonTeam.sort();

    sortedTeam.forEach((pokemon, arrayIndex) => {
        console.log(pokemon + " is at index of " + arrayIndex)
    });
}
logTheTeam2();