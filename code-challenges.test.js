// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
  it("remove the first item of the array an suffle the remaining items", () => {
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

//Good Failure! - Complete

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
//Psuedocode
//Function Name: shuffleArray
//Input: Array of string
//Output: Array of strings
//Process: Remove the first index of the array. Use .shift() to move value at the zero index. Use math.floor and math.random to get a random whole number. The whole number will signify the index of the array. Which will randomize the order of the values in the array. 
//Updated process: Remove the first index using .shift(). Use .sort() to alphabetize each string. Inside of the parameter of .sort() create an argument which will randomize a number and subtract it by 0.5. This will allow the shuffling of the array.  

//Try One. Almost solved it. 
//Could not figure out how to get Math.random() to, for example, produce 6 random numbers, but each number be different. Have Math.random produce different numbers everytime it ran through the for loop. 

// const shuffleArray = (arr) => {
//   arr.shift() //.shift will remove the value at the zero index
//   for (let i = 0; i < arr.length; i++) { //Loop 
//     const newIndex = Math.floor(Math.random() * arr.length) //newIndex = a random whole number.
//     console.log(newIndex)
//     arr[i] = arr[newIndex] //Randomises the values in the array, but we have repeating values because newIndex can produce the same number. 
//     console.log(arr)
//    }
//   return arr
// }
// console.log(shuffleArray(colors1))

//Try Two - Complete!
const shuffleArray = (arr) => {
  arr.shift() //.shift will remove the value at the zero index. 
  arr.sort(() => Math.random() - 0.5) //.sort() sorts the values in alphabetical order, but Math.random() - 0.5 allows for the shuffle of the array randomly. 
  return arr
}
console.log(shuffleArray(colors1))

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("totalVotes", () => {
  it("Returns a number that subtracts the upVotes by the downVotes.", () => {
    expect(totalVotes(votes1)).toEqual(11)
    expect(totalVotes(votes2)).toEqual(-31)
  })
})
// Good Failure! - Complete

const votes1 = { 
  upVotes: 13, 
  downVotes: 2
}
// Expected output: 11
const votes2 = { 
  upVotes: 2, 
  downVotes: 33 
}
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
//Function Name: totalVotes
//Input: Objects
//Output: Number
//Process: Create a function called totalVotes. Use the argument object.valueName to get just the number from the object. Then subtract it to get the final answer. 

const totalVotes = (object) => {
  return object.upVotes - object.downVotes
}

// console.log(totalVotes(votes1))
// console.log(totalVotes(votes2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("fixArray", () => {
  it("Returns an array that should repeat words from previous two arrays, but only have the same words once on the new array.", () => {
    expect(fixArray(...dataTypesArray1,...dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudo code:
//Function Name: fixArray
//Input: Two arrays
//Output: One array
//Process: Create a function called fixArray. Take in two arrays in the argument. Create a variable and within it use filter to filter through an a array and have it check what values we don't want duplicated. Return the value of everything that does not include "string" and "Boolean". Outside of the .filter return both arrays combined. 

//First Try
// Could not get it to run with JEST! Could you explain, please. 
// const fixArray = (arr1, arr2) => {
//    const filterArr = arr2.filter((value) => {
//     return ! value.includes("string") && ! value.includes("Boolean")
//   })
//   return arr1.concat(filterArr)
// }
//console.log(fixArray(...dataTypesArray1,...dataTypesArray2))

// Pseudo code:
//Function Name: fixArray
//Input: Two arrays
//Output: One array
//Process: Create a function called fixArray. Use ...to take in iteration of an array or string. Filter through the array and check the values as well as the index. When iterating through the array we will return an array which will return the values of the array, but if there is a duplication then the value will not be returned. 

//Second Try
//Had to get help, but would my first try work?
const fixArray = (...arr) => {
  return arr.filter((value, index) => {
    return arr.indexOf(value) == index //If the value appears more than once then .indexOf will take the first word of it. 
  })
}
// console.log(fixArray(...dataTypesArray1, ...dataTypesArray2))

//Don't really understand the spread operator. Could you explain it a little more?