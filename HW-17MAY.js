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

let citySecondName = function secondHalf (inputCity) {
    let losOrNot = inputCity.includes('Los')
    let newOrNot = inputCity.includes('New')

    let otherName

    if (losOrNot === true){

        otherName = inputCity.split('Los')

    } else if (newOrNot === true){

        otherName = inputCity.split('New')

    }

    return otherName[1]
}

let outputCity = citySecondName('New Angeles')

console.log(outputCity)

/*
8) Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

let givenArray = function sumOfInt(sumArray) { 

    let total = 0

    for (x=0; x<sumArray.length; x++) {

        console.log(sumArray[x])

        total += sumArray[x]

        console.log(total)

    }

    return total
}

let numArray = [102, 234, 456]

let totalArray = givenArray(numArray)

console.log(totalArray)

/*
9) Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

let intTwoArray = [33, 22]

let oneOrThree = function isItIncluded13 (arrayIntTwo){

    let numOne = arrayIntTwo[0].toString()
    let numTwo = arrayIntTwo[1].toString()

    let numOneoTwo = `${numOne}||${numTwo}`

    let includesOne = numOneoTwo.includes('1')
    let includesThree = numOneoTwo.includes('3')

    console.log('String contains 1', includesOne)
    console.log('String contains 3', includesThree)

    if (includesOne === true){
        return true
    } else if (includesThree === true){
        return true
    } else {
        return false
    }

}

let doesItContainOneOrThree = oneOrThree(intTwoArray) 

console.log('String contains 1 or 3:', doesItContainOneOrThree)

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

let intTwoArray2 = [33, 22]

let noOneOrThree = function isItIncluded13 (arrayIntTwo){

    let numOne = arrayIntTwo[0].toString()
    let numTwo = arrayIntTwo[1].toString()

    let numOneoTwo = `${numOne}||${numTwo}`

    let includesOne = numOneoTwo.includes('1')
    let includesThree = numOneoTwo.includes('3')

    console.log('String contains 1:', includesOne)
    console.log('String contains 3:', includesThree)

    if (includesOne === true){
        return false
    } else if (includesThree === true){
        return false
    } else {
        return true
    }

}

let notContainOneOrThree = noOneOrThree(intTwoArray2) 

console.log('String does not contain 1 or 3:', notContainOneOrThree)

/*
11) Create a function to find the longest string from a given array of strings.
*/



let longestString = function (stringArray){
    let lengthArray = []
    for(x=0; x<stringArray.length; x++){
        let lengthSt = stringArray[x].length;
        lengthArray.push(lengthSt)
    }

        let biggestNum = Math.max(...lengthArray)
        console.log(lengthArray)
        console.log(biggestNum)

        let position = lengthArray.indexOf(biggestNum)

        let longestArray = stringArray[position]

        return longestArray

}

let whichIsLongest = longestString (['Hello, my name is Shak', 'Hello World', 'I like Dancing'])

console.log(whichIsLongest)

/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

let whichAngle = function angleOutput(angle){

    return ((angle<90)) ? `Acute Angle`
         : ((angle===90)) ? `Right Angle`
         : ((angle>90 && angle<180)) ? `Obtuse Angle`
         : ((angle===180)) ? `Straight Angle`
         : ((angle>180 && angle<360)) ? `Reflex Angle`
         : ((angle===360)) ? `Full Circle`
         : `This angle is too big. Please choose an angle smaller than 360`;

}

let angleSort = whichAngle(13)

console.log(angleSort)

/*
13) Create a function to find the index of the greatest element of a given array of integers
*/

let longestStringNum = function (numArray){
    // let lengthArray = []
    // for(x=0; x<stringArray.length; x++){
    //     let lengthSt = stringArray[x].length;
    //     lengthArray.push(lengthSt)
    // }

        let biggestNum = Math.max(...numArray)
        // console.log(lengthArray)
        console.log(biggestNum)

        let position = numArray.indexOf(biggestNum)

        // let longestArray = stringArray[position]

        return position

}

let positionOfBigNum = longestStringNum ([875, 2483, 758])

console.log(positionOfBigNum)

/*
14) Create a function to get the largest even number from an array of integers.
*/

let biggestEven = function whichIsBigger2 (x,y,z) {

    let numArray = [x, y, z]

    console.log(numArray)

    numArray.sort((a, b) => b - a)

    console.log(numArray)


    let biggestEvenNum

    for (d=0; d<numArray.length; d++){
        if (numArray[d] % 2 == 0){
            biggestEvenNum = numArray[d]
            break;
        }
    }

    return biggestEvenNum
}


    

let whichNumberIsBiggestEven = biggestEven(66, 205, 105)

console.log(whichNumberIsBiggestEven)

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
