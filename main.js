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

//---Copy delete---
const keyName = prompt('Введіть потрібний ключ')
const pc2 = {...pc}
pc2[keyName] = prompt('Введіть значення для ключа')
console.log(pc2)

const {[keyName]:value,...pc3} = pc2
console.log(pc3)

//---Currency real rate---
const inputCurrency = prompt('Введіть вхідну валюту').toUpperCase()
const outputCurrency = prompt('Введіть валюту, в яку потрібно перевести').toUpperCase()
const amount = prompt('Введіть суму')
const data = fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        if (!(data.rates[outputCurrency] in data.rates)) {
            console.log('Валюта не підтримується')
            return
        }
        if (!(data.rates[inputCurrency] in data.rates)) {
            console.log('Валюта не підтримується')
            return
        }
        if (isNaN(amount) || amount === ''){
            alert('Введіть суму обміну')
            return
        }
        console.log(data)
        const result = (data.rates[outputCurrency] / data.rates[inputCurrency]) * amount
        console.log("You'll receive:" + result)
    })
    .catch(error => {
        console.error('Error:', error);
    });

//---Currency drop down---
const select           = document.createElement('select')
document.body.append(select)
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        for (let key in data.rates) {
            const option = document.createElement('option')
            option.value = key
            option.innerText = key
            select.append(option)
        }
    })

//---Currency table---
fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const table = document.createElement('table')
        document.body.append(table)

        const currencies = ['USD', 'EUR', 'UAH', 'PLN']

        const thead = document.createElement('thead')
        const headerRow = document.createElement('tr')
        thead.appendChild(headerRow)
        table.appendChild(thead)

        headerRow.appendChild(document.createElement('th'))

        currencies.forEach(currency => {
            const th = document.createElement('th')
            th.innerText = currency
            headerRow.appendChild(th)
        });

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        currencies.forEach(fromCurrency => {
            const tr = document.createElement('tr')
            tbody.appendChild(tr)

            const th = document.createElement('th')
            th.innerText = fromCurrency
            tr.appendChild(th)

            currencies.forEach(toCurrency => {
                const td = document.createElement('td')
                td.innerText = (data.rates[toCurrency] / data.rates[fromCurrency]).toFixed(2)
                tr.appendChild(td)
            });
        });
    })
    .catch(error => {
        console.error('Error:', error)
    });

//---Form---
const car = {
    "Name":"chevrolet chevelle malibu",
    "Cylinders":8,
    "Displacement":307,
    "Horsepower":130,
    "Weight_in_lbs":3504,
    "Origin":"USA",
    "in_production": false
}

const form = document.createElement('form');

for (let key in car) {
    const label = document.createElement('label')
    label.innerText = key
    form.appendChild(label)

    const input = document.createElement('input')
    input.name = key
    input.value = car[key]
    form.appendChild(input)

    form.appendChild(document.createElement('br'))
}

document.body.appendChild(form)
