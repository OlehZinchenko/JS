//---Confirms---

let answers = []
const questions = ["Do you like pizza?", "Do you like ice cream?", "Do you like cake?", "Do you like cookies?", "Do you like pie?"]
for (let i = 0; i < 5; i++) {
    answers.push(confirm(questions[i]))
}
console.log(answers)

//---Prompts---

let answers = []
const questions = ["Do you like pizza?", "Do you like ice cream?", "Do you like cake?", "Do you like cookies?", "Do you like pie?"]
for (let i = 0; i < 5; i++) {
    answers[i] = (prompt(questions[i]))
}
console.log(answers)

//---Item access---
const array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array[prompt("Please, enter index")])

//---Item change---
const array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array)
array[prompt("Please, enter index")] = prompt("Please, enter value for this index")
console.log(array)

//---Multiply table---
const array = [[], [], [], [], []]
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        array[i][j] = (i + 1) * (j + 1)
    }
}
console.log(array)

const arraySlice = [[], [], [], [], []]
for (let i = 0; i < 5; i++) {
    arraySlice[i] = array[i].slice(0, 3)
}

console.log(arraySlice)

//---IndexOf Word---
answer= prompt("Please, enter a couple of words")

//---Reverse---
let answers = []
const questions = ["Do you like pizza?", "Do you like ice cream?", "Do you like cake?", "Do you like cookies?", "Do you like pie?"]
for (let i = 0; i < 5; i++) {
    answers.push(prompt(questions[i], 'Enter a value'))
}
console.log(answers)

let reversed = []
let buffer = {}
for (let i = answers.length; i > 0; i--) {
    buffer = answers.pop()
    console.log(buffer)
    reversed.push(buffer)
}

console.log(reversed)

//---Reverse 2---
let answers = []
const questions = ["Do you like pizza?", "Do you like ice cream?", "Do you like cake?", "Do you like cookies?", "Do you like pie?"]
for (let i = 0; i < 5; i++) {
    answers.push(prompt(questions[i], 'Enter a value'))
}
console.log(answers)

let reversed = []
let buffer = {}
for (let i = answers.length; i > 0; i--) {
    buffer = answers.pop()
    console.log(buffer)
    reversed.push(buffer)
}

console.log(reversed)

let doubleReversed = []
for (let i = reversed.length; i > 0; i--) {
    buffer = reversed.shift()
    console.log(buffer)
    doubleReversed.unshift(buffer)
}
console.log(doubleReversed)

//---Deep Copy---
const array = [[], [], [], [], []]
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        array[i][j] = (i + 1) * (j + 1)
    }
}
console.log(array)
let deepCopyArray = structuredClone(array)
console.log(deepCopyArray)

//---Array Equals---
const array = ['Apple', 'Microsoft', 'Samsung', 'Nokia', 'Sony', 'Haier']
const array2 = array
console.log(array2)
console.log(array == array2)

//---Flat---
const array = [[], [], [], [], []]
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        array[i][j] = (i + 1) * (j + 1)
    }
}
console.log(array)

const flatArray = array.flat()
console.log(flatArray)

//Or
let flatArray = []
for (let i = 0; i < 5; i++) {
    flatArray.push(...array[i])
}
console.log(flatArray)

//---Destruct---
let answer = prompt("Please, enter a string")
const [a,,,,b,,,,c] = answer
console.log(a, b, c)

//---Destruct default---
let answer = prompt("Please, enter a string")
const [,a='!',,b='!',c='!'] = answer
console.log(a, b, c)

//---Destruct default---
let arr = ["John", "Paul", "George", "Ringo"]
for (let i of arr) {
    alert(i)
}

//---For Select Option---
const currencies = ["USD", "EUR", "GBP", "UAH"]
let str = "<select>"
let option = "";
for (const currency of currencies){
    option = "<option>" + currency + "</option>"
    str+=option
}
str+= "</select>"
document.write(str)


//---For Table Horizontal---
const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
let nameItem = "";
for (const name of names){
    nameItem = "<td>" + name + "</td>"
    str+=nameItem
}
str+= "</table>"
document.write(str)

//---For Table Vertical---
const names = ["John", "Paul", "George", "Ringo"]
let str = "<table>"
let nameItem = "";
for (const name of names){
    nameItem = "<tr>" + name + "</tr><br/>"
    str+=nameItem
}
str+= "</table>"
document.write(str)

//---For Table Letters---
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";
let currencyItem = "";
for (const currency of currencies) {
    currencyItem = "<tr>";
    for (const letter of currency) {
        currencyItem += "<td>" + letter + "</td>";
    }
    currencyItem += "</tr>";
    str += currencyItem + "<br/>";
}
str += "</table>";
document.write(str);

//---For Multiply Table---
document.head.insertAdjacentHTML("beforeend", `<style>.odd-row{background-color: lightgray;}</style>`)

arr = [0, 1, 2, 3, 4];
let str = "<table>";

for (const i of arr) {
    // Use the class 'odd-row' for odd rows
    const rowClass = i % 2 === 0 ? '' : 'odd-row';

    str += "<tr class='" + rowClass + "'>";
    for (const j of arr) {
        str += "<td>" + i * j + "</td>";
    }
    str += "</tr>";
}

str += "</table>";
document.write(str);

//---Function Capitalize---
const capitalize = str => {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
    return result
}
console.log(capitalize("cANBerRa"))

//---Map Capitalize---
const capitalize = str => {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
    return result
}

let input = prompt("Please, enter a string")
let array = input.split(" ")
const capitalisedArr = array.map(capitalize)
const resultString = capitalisedArr.toString().replace(/,/g, '')
console.log(resultString)

//---Filter Lexics---
