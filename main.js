//---Temperature---
const span = document.createElement('span');
span.textContent = 'Enter a temperature ';
const inputTemp = document.createElement('input');
document.body.append(span)
document.body.append(inputTemp)
const br = document.createElement('br');
document.body.appendChild(br);

const select = document.createElement('select');
const celsius = document.createElement('option');
celsius.value = 'celsius';
celsius.text = 'Celsius';

const farengheit = document.createElement('option');
farengheit.value = 'farengheit';
farengheit.text = 'Farengheit';

select.appendChild(celsius);
select.appendChild(farengheit);

document.body.appendChild(select);

const tempFunc = (input, select) => {
    if (select.value === 'celsius') {
        return input.value * 1.8 + 32;
    } else {
        return (input.value - 32) / 1.8;
    }
}

const button = document.createElement('button');
button.textContent = 'Convert';
document.body.appendChild(button);
button.addEventListener('click', () => {
    const result = tempFunc(inputTemp, select);
    alert(result);
})

//---RGB---
const spanRed = document.createElement('span');
spanRed.textContent = 'Enter a RED number ';
const inputRed = document.createElement('input');
document.body.append(spanRed,inputRed)
let br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const spanGreen = document.createElement('span');
spanGreen.textContent = 'Enter a GREEN number ';
const inputGreen = document.createElement('input');
document.body.append(spanGreen,inputGreen)
br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const spanBlue = document.createElement('span');
spanBlue.textContent = 'Enter a BLUE number ';
const inputBlue = document.createElement('input');
document.body.append(spanBlue,inputBlue)
br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const rgbFunc = (inputRed, inputGreen, inputBlue) => {
    const red = inputRed.value.toString(16).padStart(2, '0');
    const green = inputGreen.value.toString(16).padStart(2, '0');
    const blue = inputBlue.value.toString(16).padStart(2, '0');
    return '#' + red + green + blue;
}

const button = document.createElement('button');
button.textContent = 'Convert';
document.body.appendChild(button);
button.addEventListener('click', () => {
    const result = rgbFunc(inputRed, inputGreen, inputBlue);
    alert(result);
})

//---Flats---
const spanFloors = document.createElement('span');
spanFloors.textContent = 'Please enter floors number: ';
const inputFloors = document.createElement('input');
document.body.append(spanFloors,inputFloors)
let br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const spanFlats = document.createElement('span');
spanFlats.textContent = 'Please enter number of flats per floor: ';
const inputFlats = document.createElement('input');
document.body.append(spanFlats,inputFlats)
br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const spanFlat = document.createElement('span');
spanFlat.textContent = 'Please enter number of flat: ';
const inputFlat = document.createElement('input');
document.body.append(spanFlat,inputFlat)
br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const Calc = (inputFloors, inputFlats, inputFlat) => {
    return(Math.floor((inputFlat.value-1)%(inputFloors.value * inputFlats.value)/inputFlats.value+1))
}

const button = document.createElement('button');
button.textContent = 'Calculate';
document.body.appendChild(button);
button.addEventListener('click', () => {
    const result = Calc(inputFloors, inputFlats, inputFlat);
    alert(result);
})

//---Credentials---
const credentials = () => {
    const firstName = prompt('Enter first name').toUpperCase()
    const surname = prompt('Enter surname').toUpperCase()
    const fatherName = prompt('Enter father name').toUpperCase()
    const fullName = firstName + ' ' + surname + ' ' + fatherName
    return {
        name : firstName,
        surname : surname,
        fatherName : fatherName,
        fullName : fullName
    }
}

credentials()

//---New line---
const spanString = document.createElement('span');
spanString.textContent = 'Please, enter string with some \\n for new line: ';
const inputString = document.createElement('input');
document.body.append(spanString,inputString)
br = document.createElement("span");
br.innerHTML = "<br/>";
document.body.appendChild(br);

const multilineString = (input) => {
    const arr = input.split("\\n");
    return arr.join("\n");
}

const button = document.createElement('button');
button.textContent = 'Convert';
document.body.appendChild(button);
button.addEventListener('click', () => {
    const result = multilineString(inputString.value);
    alert(result);
})

//---Prompt OR---
    let age;
    (function ageFunc(age='default value') {
        age = prompt('Enter your age');
        if (age === null || age === '') {
            return age;
        }
        alert(age);
    })();

//---Login And Password---
const login = 'admin';
const password = 'qwerty';

const loginFunc = (login, password) => {
    const userLogin = prompt('Enter your login');
    const userPassword = prompt('Enter your password');
    if (userLogin === login && userPassword === password) {
        alert('Welcome');
    }
    else {
        alert('Wrong login or password');
    }
}

loginFunc(login, password)

//---For Table---
document.head.insertAdjacentHTML("beforeend", `<style>.odd-row{background-color: lightgray;}</style>`)

array = [0, 1, 2, 3, 4];

const table = (arr) => {
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
}

table(array)

//---Filter Lexics---
const filterWords = ['бляха', 'муха', "пляшка", "шабля"]
const input = prompt("Please, enter a string")

const filterLexics = (input, filterWords) => {
    const arr = input.split(" ");
    const filteredArr = arr.filter(word => !filterWords.includes(word));
    return filteredArr.join(" ");
}

alert(filterLexics(input, filterWords))

//---Currency Table---
fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const doubleArr = [];
        for (const key in data.rates) {
            doubleArr.push([key, data.rates[key]]);
        }
        console.log(doubleArr);

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
