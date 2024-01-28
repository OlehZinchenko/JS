//---Literals---
const cat = {
    weight: 5,
    color: 'black',
    name: 'Kitty'
}

const car = {
    model: 'BMW',
    color: 'white',
    year: 2010
}

const war = {
    country: 'Ukraine',
    year: 2014,
    reason: 'Russia'
}

const pc = {
    cpu: 'Intel',
    ram: 8,
    ssd: 256
}

//---Literals expand---
const keyName = prompt('Введіть потрібний ключ')
const pc = {
    cpu: 'Intel',
    ram: 8,
    ssd: 256,
    [keyName]: prompt('Введіть потрібне значення')
}
console.log(pc)

//---Literals copy---
const pc2 = {...pc}
pc2[prompt("Введіть ключ")] = prompt('Введіть значення для ключа')
console.log(pc2)

//---Html tree---
var tree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: "span",
                    children: ["Enter a data please:"],
                },
                {
                    tagName: "br",
                },
                {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "name",
                    },
                },
                {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "surname",
                    },
                },
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: "button",
                    attrs: {
                        id: "ok",
                    },
                    children: ["OK"],
                },
                {
                    tagName: "button",
                    attrs: {
                        id: "cancel",
                    },
                    children: ["Cancel"],
                },
            ]
        }
    ]
}
console.log(tree.children[1].children[1].children[0])
console.log(tree.children[0].children[3].attrs.id)

//---Parent---
var tree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            parentElement: 'body',
            children: [
                {
                    tagName: "span",
                    parentElement: 'div',
                    children: ["Enter a data please:"],
                },
                {
                    tagName: "br",
                    parentElement: 'div',
                },
                {
                    tagName: "input",
                    parentElement: 'div',
                    attrs: {
                        type: "text",
                        id: "name",
                    },
                },
                {
                    tagName: "input",
                    parentElement: 'div',
                    attrs: {
                        type: "text",
                        id: "surname",
                    },
                },
            ]
        },
        {
            tagName: 'div',
            parentElement: 'body',
            children: [
                {
                    tagName: "button",
                    parentElement: 'div',
                    attrs: {
                        id: "ok",
                    },
                    children: ["OK"],
                },
                {
                    tagName: "button",
                    parentElement: 'div',
                    attrs: {
                        id: "cancel",
                    },
                    children: ["Cancel"],
                },
            ]
        }
    ]
}

//---Change OK---
var tree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            parentElement: 'body',
            children: [
                {
                    tagName: "span",
                    parentElement: 'div',
                    children: ["Enter a data please:"],
                },
                {
                    tagName: "br",
                    parentElement: 'div',
                },
                {
                    tagName: "input",
                    parentElement: 'div',
                    attrs: {
                        type: "text",
                        id: "name",
                    },
                },
                {
                    tagName: "input",
                    parentElement: 'div',
                    attrs: {
                        type: "text",
                        id: "surname",
                    },
                },
            ]
        },
        {
            tagName: 'div',
            parentElement: 'body',
            children: [
                {
                    tagName: "button",
                    parentElement: 'div',
                    attrs: {
                        id: prompt('Введіть id'),
                        [prompt('Введіть атрибут')]: prompt('Введіть значення')
                    },
                    children: ["OK"],
                },
                {
                    tagName: "button",
                    parentElement: 'div',
                    attrs: {
                        id: "cancel",
                    },
                    children: ["Cancel"],
                },
            ]
        }
    ]
}
console.log(tree)

//---Destructure---
var tree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            parentElement: 'body',
            children: [
                {
                    tagName: "span",
                    parentElement: 'div',
                    children: ["Enter a data please:"],
                },
                {
                    tagName: "br",
                    parentElement: 'div',
                },
                {
                    tagName: "input",
                    parentElement: 'div',
                    attrs: {
                        type: "text",
                        id: "name",
                    },
                },
                {
                    tagName: "input",
                    parentElement: 'div',
                    attrs: {
                        type: "text",
                        id: "surname",
                    },
                },
            ]
        },
        {
            tagName: 'div',
            parentElement: 'body',
            children: [
                {
                    tagName: "button",
                    parentElement: 'div',
                    attrs: {
                        id: prompt('Введіть id'),
                        [prompt('Введіть атрибут')]: prompt('Введіть значення')
                    },
                    children: ["OK"],
                },
                {
                    tagName: "button",
                    parentElement: 'div',
                    attrs: {
                        id: "cancel",
                    },
                    children: ["Cancel"],
                },
            ]
        }
    ]
}
const {children: {0 : {children: {0 : {children: {0 : text}}}}}} = tree;
console.log(text);

const {children: {1 : {children: {1 : {children: {0 :text}}}}}} = tree;
console.log(text);

const {children: {0 : {children: {3 : {attrs: {id}}}}}} = tree;
console.log(id);

//---Destruct array---
const arr = [1,2,3,4,5, "a", "b", "c"]
const [odd1, even1,odd2 ,even2, odd3,...liters] = arr
console.log(odd1, odd2, odd3 , even1, even2, liters)

//---Destruct string---
const arr = [1, "abc"]
const [number, [s1, s2, s3]] = arr
console.log(number, s1, s2, s3)

//---Destruct 2---
let obj = {name: 'Ivan',
    surname: 'Petrov',
    children: [{name: 'Maria'}, {name: 'Nikolay'}]}

const {children: [{name: name1}, {name: name2}]} = obj
console.log(name1, name2);

//---Destruct 3---
let arr = [1,2,3,4, 5,6,7,10]
const {0: a, 1: b, length} = arr
console.log(a, b, length)
