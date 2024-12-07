function display(text: string): void;
function display(text1: string, text2: string): void;
function display(textArr: string[]): void;

function display(val1: string | string[], val2?: string): void {
  if (typeof val1 === "string" && typeof val2 === "undefined") {
    console.log(val1);
  }
  if (typeof val1 === "string" && typeof val2 === "string") {
    console.log(val1);
    console.log(val2);
  }
  if (typeof val1 === "object") {
    val1.forEach((element) => {
      console.log(element);
    });
  }
}

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);
