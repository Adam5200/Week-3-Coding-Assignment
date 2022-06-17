//initial declaration of the age array
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//1a. We print the value of the first age subtracted from the second age
let subtraction = (ages[ages.length-1] - ages[0])
console.log("Second age minus first age: " + subtraction)

//1b. We add an additional age to the array, and check again to make sure it is dynamic
ages.push(22)
subtraction = (ages[ages.length-1] - ages[0])
console.log("Checking again after adding another age: " + subtraction)

//1c. We use a loop to cycle through all of the ages, printing out the average, or mean value at the end
let sumOfAllAges = 0
for (let age of ages) {
    sumOfAllAges += age
}
console.log("Average Age: " + sumOfAllAges / ages.length)

//initial declaration of second array
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

//2a. Calculating the average number of letters per name
let sumOfAllLetters = 0
for (let name of names) {
    sumOfAllLetters += name.length
}
console.log("Average # of letters per name: " + sumOfAllLetters / names.length)

//2b. Concatenating all of the names to one string

let allNames = ""
for(let name of names) {
    allNames += (name + " ")
}
console.log("All of the names: " + allNames)

//3. Finding the first instance in an array

let sampleArray = []
sampleArray[0]

//4. Finding the second instance in an array
let sampleArray2 = []
sampleArray[sampleArray.length - 1]

//5. Creating an array of the numerical lengths of the names from before
let nameLengths = []
for(let name of names) {
    nameLengths.push(name.length)
}

//6. Logging the sum of the previous array to the console
let sumOfNameLengths = 0
for(let nameLength of nameLengths) {
    sumOfNameLengths += nameLength
}
console.log("Sum of name lengths: " + sumOfNameLengths)

//7. A function to concatenate a single word as many times as you want
function concatHowMany(word, n) {
    let toReturn = ""
    for(let i = 0; i < n; i++) {
        toReturn += word
    }
    return toReturn
}

//8. A function that returns a full name with 2 name values
function fullName(firstName, lastName) {
    return (firstName + " " + lastName)
}

//9. Returns true if the sum of an array is over 100
function isSumOverAHundred(array) {
    let sum = 0
    for(let instance of array) {
        sum += instance
    }
    return(sum > 100)
}

//10. Returns the average value of an array
function averageOfArray(array) {
    let sum = 0
    for(let instance of array) {
        sum += instance
    }
    return(sum / array.length)
}

//11. Compares 2 arrays and returns true if the average of the first is greater than the avg of the second
function arrayCompare(array1, array2) {
    let sum1 = 0
    for(let instance of array1) {
        sum1 += instance
    }

    let sum2 = 0
    for(let instance of array2) {
        sum2 += instance
    }

    return((sum1 / array1.length-1) > (sum2 / array2.length-1))
}

//12. Will return true if isHotOuside is true and moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    return(moneyInPocket > 10.5 && isHotOutside == true)
}

//13. Returns how many values in an array are odd numbers
function howManyEvensAndOdds(array) {
    let sumOfOdds = 0
    for(let instance of array) {
        if(instance % 2 != 0) {
            sumOfOdds++
        }
    }
    return sumOfOdds
}