//---makeProfileTimer---
function makeProfileTimer() {
  let start = performance.now();
  return function() {
    return performance.now() - start;
  }
}

const timer = makeProfileTimer()
alert('Вимiрюємо час роботи цього alert');  //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
alert(timer()); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(),
// тобто виміряти час виконання alert
const timer2 = makeProfileTimer()
prompt('')
alert(`Час роботи двух аlert та одного prompt ${timer()}`)
alert(`Час роботи prompt та попереднього alert ${timer2()}`)

//---makeSaver---
function makeSaver(func) {
    let result;
    let first = true;
    return function() {
        if (first) {
        result = func();
        first = false;
        }
        return result;
    }

}

let saver = makeSaver(Math.random) //створює функцію-сховище результату переданої як параметр функції (Math.random
// у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
let value1 = saver()              //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
let value2 = saver()              //saver надалі просто зберігає результат функції, і більше НЕ викликає передану
                                  //в makeSaver функцію;
alert(`Random: ${value1} === ${value2}`)

let saver2 = makeSaver(() => {
    console.log('saved function called');
    return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
})
let value3 = saver2()
let value4 = saver2()

console.log(value3 === value4) // теж має бути true

let namePrompt = prompt.bind(window, 'Як тебе звуть?')
let nameSaver = makeSaver(namePrompt)
alert(`Привіт! Prompt ще не було!`)
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)

//---myBind---
function myBind(func, context, ...args) {
  return function(...rest) {
    return func.call(context, ...args, ...rest)
  }
}

let pow5 = myBind(Math.pow, Math, [, 5])
const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
bindedJoiner('a','c','d') === 'abcdef'
bindedJoiner('1','2','3') === '1b23ef'

//---checkResult---
function checkResult(original, validator){
    function wrapper(...params){
        let result;
        do {
            result = original(...params)
        } while (!validator(result))
        return result
    }
    return wrapper
}


//numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
const numberPrompt = checkResult(prompt, x => !isNaN(+x))
let   number = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати this, використовуючи call або apply
