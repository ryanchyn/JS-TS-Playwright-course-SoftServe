/*
Використовуючи регулярні вирази реалізуйте функцію getLetterCount(text), 
яка приймає стрінговий параметр text та повертає об’єкт, ключами якого є літери, 
які зустрічається в тексті text, а значеннями кількість повторень відповідної літери.

Приклад роботи:
console.log(getLetterCount("banana"));
// { b: 1, a: 3, n: 2 }
console.log(getLetterCount("The short text"));
// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1
*/

function getLetterCount(text) {
  let letters = text.match(/[a-zA-Z]/g);
  let letterCounts = {};

  if (letters) {
    letters.forEach((letter) => {
      letter = letter.toLowerCase();
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    });
  }

  return letterCounts;
}

console.log(getLetterCount("banana"));
// { b: 1, a: 3, n: 2 }
console.log(getLetterCount("The short text"));
// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1
