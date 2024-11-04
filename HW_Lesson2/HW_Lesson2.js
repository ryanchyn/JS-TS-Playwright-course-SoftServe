//===========Task 1===========
function processData(num1 = 0, num2 = 0, action = "sum") {
  switch (action) {
    case "sum":
      return num1 + num2;
    case "product":
      return num1 * num2;
    case "square":
      return Math.pow(num1, num2);
  }
}

console.log(processData(10, 4, "product"));
console.log(processData());

//===========Task 2============

//by using includes()

function findElem1(arr, el) {
  return arr.includes(el);
}

const arr1 = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem1(arr1, 7));
console.log(findElem1(arr1, "Alex"));

// by using my own solution

function findElem2(arr, el) {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      result = true;
    }
  }
  return result;
}

const arr2 = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem2(arr2, 7));
console.log(findElem2(arr2, "Alex"));

//===========Task 3============

function deleteItem(arr, item) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index--;
    }
  }
  return arr;
}

console.log(deleteItem([3, 12, 16, 19, 21, 33], 16));

//===========Task 4============

function getCircleLength(r) {
  let result;

  if (typeof r === "number" && r > 0) {
    result = 2 * Math.PI * r;
    console.log(result);
  } else if (typeof r !== "number") {
    console.log("Incorrect radius - please, enter a numeric value!");
  } else if (r <= 0) {
    console.log("Incorrect radius - please, enter a value > 0!");
  }
}

getCircleLength(5);
getCircleLength("error");
getCircleLength(-9);

//===========Task 5============

function checkID() {
  try {
    const id = prompt("Input your ID from 1 to 1000");
    const numId = Number(id);
    if (isNaN(numId)) {
      throw new Error("Non-number value! Please enter your ID again");
    } else if (id === "") {
      throw new Error("The field is empty! Please enter your ID again");
    } else if (numId < 0 || numId > 1000) {
      throw new Error("The field is out of range! Please enter your ID again");
    } else {
      alert("Success!");
    }
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}

checkID();
