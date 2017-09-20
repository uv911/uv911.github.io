/**
 * @name groupOneAnimimalMadlibs.js
 * 
 * Homework assignment for Class #3 - Madlibs
 *
 * Assignment:
 * Step 1: Construct an array of company names, like Uber, Lyft, Google, Apple
 * Step 2: Construct a silly array of animals
 * Step 3: Make a loop that makes a sentence similar to 
 * "My company is an Uber for dogs!" Spit out at least 5 sentences to the console.log()
 * 
 * Bonus challenge: randomize the selection of the company names and animals
 * 
 * Bonus challenge for those of you who know some jQuery:
 * populate the HTML with a name of one groupOne!
 *
*/

/**
 *
 * My solution to the exercize will create 2 arrays to use in Mad Libs for Investors
 * 1) Build 2 arrays from a comma separated list
 * 2) Iterate through the values in groupOne until there are no more values
 * 3) Pick a random value from groupOne to use and then remove it so it will not be reused
 * 4) Pick a random value from groupTwo  Note: these values can be reused
 * 5) Log the Mad Libs result to the console
 */
console.log("Starting Mad Libs for Investors");
var groupOne = new Array();
var groupTwo = new Array();

setGroupOne("Google,  Apple,   Amazon, Tinder, AirBnB, Abercrombie, GAP");
setGroupTwo("Unicorns,  Pegasuses, Puppies, Frogs, Blue Footed Bobbies, Geese");
//printArray(getGroupOne());
//printArray(getGroupTwo());

while (getGroupOne().length > 0) {
	console.log(buildMadLibsOutput());
}

function buildMadLibsOutput() {
	return "I have a great investment opportunity that is like " + chooseAndRemoveRandomValue(getGroupOne()) 
	+ " for " + chooseRandomValue(getGroupTwo()) + "!!!"
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
		// get random position
		var pos = getRandomIntInclusive(0, array.length - 1);
		// remove and return the removed item
		return array[pos];
	} else {
		console.log("Unable to choose from NON-Arrays");
	}
}

function chooseAndRemoveRandomValue(array) {
	if(isArray(array)) {
		// get random position
		var pos = getRandomIntInclusive(0, array.length - 1);
		// remove and return the removed item
		return array.splice(pos, 1);
	} else {
		console.log("Unable to choose and remove items from NON-Arrays");
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

function setGroupOne(stringList) {
	groupOne = buildArrayFromString(stringList);
}

function getGroupOne() {
	return groupOne;
}

function setGroupTwo(stringList) {
	groupTwo = buildArrayFromString(stringList);
}

function getGroupTwo() {
	return groupTwo;
}
