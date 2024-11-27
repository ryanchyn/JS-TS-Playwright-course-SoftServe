/*
Використовуючи регулярні вирази реалізуйте функцію removeSpaces(text), 
яка приймає стрінговий параметр text і прибирає пробіли на початку і в кінці рядка та повертає змінену стрінгу.

Приклад роботи:
console.log(removeSpaces(' textWithSpaces '));
// “textWithSpaces”
console.log(removeSpaces(' more text with spaces '));
// “more text with spaces”
*/

function removeSpaces(text) {
  return text.replace(/^\s+|\s+$/g, "");
}

console.log(removeSpaces(" textWithSpaces "));
console.log(removeSpaces("  more text with spaces "));
