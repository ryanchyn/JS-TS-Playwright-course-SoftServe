//Task 2

function processData(param: string | number | boolean | number[] | []): any {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();

    case "number":
      return param ** 2;

    case "boolean":
      return !param;

    case "object":
      if (Array.isArray(param)) {
        if (param.length === 0) {
          return "Empty array: []";
        } else if (param.every((item) => typeof item === "number")) {
          return param.map((num) => num ** 2);
        } else {
          throw new Error("Array contains non-number elements");
        }
      }
      break;
  }
}

console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // Empty array: []
