/*
Реалізуйте за допомогою ругулярних виразів функцію findCapitalWords(sentence), 
яка приймає речення sentence і повертає масив усіх слів, які починаються з великої літери.


Приклад роботи:
console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
// ["The", "Quick", "Brown", "Fox", "Lazy", "Dog"]
console.log(findCapitalWords("no capital letter here"));
// []
*/

function findCapitalWords(sentence) {
  let capitalWordsArr = sentence.match(/\b[A-Z][a-z]*/g);
  return capitalWordsArr || [];
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
console.log(findCapitalWords("no capital letter here"));
