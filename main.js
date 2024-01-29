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
