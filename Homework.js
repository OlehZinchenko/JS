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
