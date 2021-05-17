/*
1) Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
*/

const tripleSum = function addOrTrple (x, y){

    let sum = 0
        
    if (x===y){
        sum = (x+y)*3
    } else {
        sum = (x+y)
    }

    return sum
}

console.log(tripleSum(6,6))

/*
2) Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.
*/

const fiftyOrNot = function isIt50 (x,y){

    let true50 

    if ((x+y) === 50){
        true50 = true
    } else if (((x)===50)||((y) === 50)){
        true50 = true
    } else {
        true50 = false 
    }

    return true50
}

console.log(fiftyOrNot(50,8))

/*
3) Create a function to remove a character at the specified position of a given string and return the new string.
*/

let stRing = 'Today is a nice day'
let position = 3

let removeLetter = function chooseLetter (chosenString, x) {

    mystring = chosenString.replace(chosenString[x-1],'')

    return mystring

}

let withoutString = removeLetter(stRing, position)

console.log(withoutString)



/*
4) Create a function to find the largest of three given integers.
*/

let biggestNum = function whichIsBigger (x,y,z) {

    let numArray = [x, y, z]

    console.log(numArray)

    numArray.sort((a, b) => b - a)

    console.log(numArray)

    let biggest = numArray[0]

    return biggest

    }

let whichNumberIsBiggest = biggestNum(66, 205, 105)

console.log(whichNumberIsBiggest)


/*
5) Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

let betweenRange = function inTheRange (x, y) {

    let trueOrFalse 

    // if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)){
    //     trueOrFalse = true
    // } else {
    //     trueOrFalse = false
    // }

    if (((x >= 40 && x <= 60) || (y >= 40 && y <= 60)) || ((x >= 70 && x <= 100) || (y >= 70 && y <= 100))){
        trueOrFalse = true
    } else {
        trueOrFalse = false
    }
    
    return trueOrFalse
}

let checkNumber = betweenRange(72, 68)

console.log(checkNumber)


/*
6) Create a function that creates and returns the specified number of copies of a given string (positive number).
*/

let repeatString = function duplicate (inputString, x) {

    let outputArray = []

    for (d=0; d<x; d++){
        outputArray.push(inputString)
    }

    return outputArray
}

let newString = repeatString('Hello World!', 4)

console.log(newString)

/*
7)
Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

/*
11)
Create a function to find the longest string from a given array of strings.
*/

/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

/*
13) Create a function to find the index of the greatest element of a given array of integers
*/

/*
14) Create a function to get the largest even number from an array of integers.
*/

/*
15) Create a function to check from two given integers, whether one is positive and another one is negative.
*/

/*
16) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

/*
17) Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

/*
18) Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
