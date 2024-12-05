/*
Task 1. Створіть функцію superSort(arr, direction), яка приймає масив рядків arr і 
напрямок сортування direction з двома можливими значеннями: «asc» і «desc». 
Функція повертає відсортований масив як копію.

Створіть type alias SortFunction для цієї функції.

Приклад роботи:
const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
// [ 'Alex', 'Ira', 'Nina', 'Vlad' ]
const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// [ 'D', 'C', 'B', 'A' ]
*/

type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

function superSort(arr: string[], direction: "asc" | "desc"): string[] {
  if (direction === "asc") {
    return arr.sort();
  } else if (direction === "desc") {
    return arr.sort((a, b) => b.localeCompare(a));
  }
  throw new Error("Error!! Use only 'asc' or 'desc'");
}

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
// [ 'Alex', 'Ira', 'Nina', 'Vlad' ]
const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// [ 'D', 'C', 'B', 'A' ]
