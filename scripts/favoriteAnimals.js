/**
 * @name favoriteAnimals.js
 * 
 * Homework assignment for Class #4 - Favorite Animals
 *
 * Assignment:
 * Defines an array of dog or cat breeds (or rabbits or whatever your favorite animal is)
 * Defines your favorite breed of all time
 * Use the prompt() function to take in a breed. (Note: just Google search it if you don't know it—It should make sense)
 * Make the computer choose a random breed and say "Your favorite breed is X? Mine is Y!"
 * If it's the same, say "We're besties!" and if not say "You're wrong!"
 *
*/

/**
 *
 * My solution to the exercize will create 2 arrays to use in Mad Libs for Investors
 * 1) Build animal array with Dog Breeds from a comma separated list
 * 2) Prompt user for their favorite Dog Breed
 * 3) Pick a random value from AllAnimals to use 
 * 4) Log the result to the console
 */
console.log("Starting Favorite Animals");
var allAnimals = new Array();

setAllAnimals("Lab,  Golden Retriever,   Burmese, Border Collie, Golden Doodle, Beagle, Great Dane");

printArray(getAllAnimals());

var myFavorite = prompt("What is your favorite breed of dog?");
//var myFavorite = "Lab";

console.log(buildFavoriteAnimalsOutput(myFavorite));

function buildFavoriteAnimalsOutput(favorite) {
    var randomAnimal = chooseRandomValue(getAllAnimals());
    var returnVal = "Your favorite breed is " + favorite + " Mine is " + randomAnimal + "!  ";

    if(favorite.toLowerCase() === randomAnimal.toLowerCase()) {
        returnVal += "We're besties!";
    } else {
        returnVal += "You're Wrong!"
    }
	return returnVal;
}

function buildArrayFromString(stringList) {
	return stringList.split(",").map(function(item) {
		return item.trim();
	});
}

function printArray(arrayToPrint) {
	if (isArray(arrayToPrint)) {
		arrayToPrint.forEach(logItem);
	} else {
		console.log("Unable to print non-Arrays");
	}
}

function logItem(item, index) {
	console.log("index[" + index + "] value is: '" + item + "'");
}

function chooseRandomValue(array) {
	if(isArray(array)) {
		// get random position and return that value
		var pos = getRandomIntInclusive(0, array.length - 1);
		return array[pos];
	} else {
		console.log("Unable to choose from NON-Arrays");
	}
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function isArray(array) {
	return (array instanceof Array);
}

function setAllAnimals(stringList) {
	AllAnimals = buildArrayFromString(stringList);
}

function getAllAnimals() {
	return AllAnimals;
}

