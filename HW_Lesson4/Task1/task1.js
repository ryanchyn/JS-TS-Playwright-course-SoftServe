/*
Task 1. Для заданого об’єкта scores видалити властивості, значення яких є нечисловими. 
Вивести змінений об’єкт.
*/

const scores = {
  programming: 88,
  design: 74,
  jurisprudence: false,
  relational_DB: 92,
  computerGraphics: "submitted",
  patterns: 65,
  philosophy: "transferred",
  network: 81,
};

function deleteNaNvaluesFromObject(object) {
  for (let key in object) {
    if (typeof object[key] !== "number") {
      delete object[key];
    }
  }
  return object;
}

console.log(deleteNaNvaluesFromObject(scores));
