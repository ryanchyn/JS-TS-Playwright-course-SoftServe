/*
Task 1.  Напишіть програму мовою JavaScript, яка перетворює вхідне числове значення в стрінгу, 
яка містить відповідну кількість годин і хвилин.
	Приклад роботи:
inputValue = 82;
result:  1:22
*/

function timeConverter(value) {
  let hours;
  let minutes;
  let result;

  if (typeof value === "number") {
    hours = Math.trunc(value / 60);
    minutes = value % 60;

    result = `${hours}:${minutes}`;

    console.log(result);
  } else {
    throw Error("Value is not a number!");
  }
}

timeConverter(82); //output: "1:22"
timeConverter(124); //output: "2:4"

/*
Task 2.  Напишіть програму мовою JavaScript, яка пропонує юзеру
ввести  два числових значення (використати prompt()). 
Розрахувати суму, різницю, добуток і  частку введених значень
та вивести отримані результати. 
У випадку, якщо різниця вийшла від’ємною – результат потрібно перетворити
в додатній.
*/

function peformCalculation() {
  const num1 = Number(prompt("Input 1 number"));
  const num2 = Number(prompt("Input 2 number"));

  const add_result = Math.abs(num1 + num2);
  const subst_result = Math.abs(num1 - num2);
  const multp_result = Math.abs(num1 * num2);
  const divid_result = Math.abs(num1 / num2);

  console.log(`Result of adding: ${add_result}
Result of subtracting: ${subst_result}
Result of multiplying: ${multp_result} 
Result of dividing: ${divid_result}`);
}

peformCalculation();

/*
Task 3. Заданий код.
Допишіть код, щоб в консолі браузера з'явилися рядки, 
які написані в коментарях, оперуючи при цьому змінними х і у.
*/

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // Допишіть код, необхідно використовувати змінні x і y // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x === 1) + String(y);
console.log(res2); // Допишіть код, необхідно використовувати змінні x і y // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(Boolean(x === 1) + Boolean(y === 2));
console.log(res3); // Допишіть код, необхідно використовувати змінні x і y // true
console.log(typeof res3); // "boolean"

let res4 = x * "text";
console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
console.log(typeof res4); // "number"

/*
Task 4. Написати умовну конструкцію, яка в залежності від значення набраного балу по 100-бальній шкалі, виводитиме відповідний результат. Зробити 2-ма різними способами через 2 різних умовних оператора.
Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied !”
Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!”
*/

function printScore(value) {
  if (0 <= value && value <= 49) {
    console.log("Unsatisfied!");
  } else if (50 <= value && value <= 70) {
    console.log("Satisfied!");
  } else if (71 <= value && value <= 87) {
    console.log("Good!");
  } else if (88 <= value && value <= 100) {
    console.log("Excellent!");
  } else {
    console.log("Incorrect assessment!!");
  }
}

printScore(88);

/*
Task 5. Напишіть програму на JavaScript, яка ітерується цілими числами від 1 до 50. 
Для числа, кратного двом потрібно додатково виводити " kratne 2!". 
Для числа, кратного чотирьом потрібно додатково виводити " kratne 4!". 
Для чисел, кратних двом і чотирьом, виведіть " kratne 2 & 4!".
	Приклад роботи для перших 8-ми чисел діапазону:
1
2 kratne 2!
3
4 kratne 2 & 4!
5
6 kratne 2!
7
8 kratne 2 & 4!
*/

function printKratne1to50() {
  for (let index = 0; index < 50; index++) {
    if (index % 2 === 0 && index % 4 !== 0) {
      console.log(index);
      console.log(" kratne 2!");
    } else if (index % 4 === 0 && index % 2 !== 0) {
      console.log(index);
      console.log(" kratne 4!");
    } else if (index % 4 === 0 && index % 2 === 0) {
      console.log(index);
      console.log(" kratne 2 & 4!");
    }
  }
}

printKratne1to50();

/*
Task 6*. Напишіть програму на JavaScript, яка приймає число від користувача і перевіряє, 
чи є це число простим. Простим є таке число, яке більше за 1 і ділиться без остачі тільки на себе 
і 1. Програма повинна вивести відповідне повідомлення, чи є число простим, чи ні.
	
Приклад роботи для числа 4:
4 is not a prime number.

Приклад роботи для числа 7:
7 is a prime number.
*/

function primeNumberVerificator(number) {
  //wrong
  if (number > 0) {
    for (let index = 2; index < 10; index++) {
      if (number % index === 0) {
        console.log(`${number} is not a prime number`);
        return;
      }
    }
    console.log(`${number} is a prime number`);
  }
}

primeNumberVerificator(7);
