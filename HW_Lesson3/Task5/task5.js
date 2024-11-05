document.addEventListener("DOMContentLoaded", () => {
  function getInput() {
    const textArea = document.querySelector("form");

    textArea.addEventListener("submit", (event) => {
      event.preventDefault();

      const text = textArea.querySelector("#textarea").value;

      console.log(text);

      createTextBlock(text);

      textArea.reset();
    });
  }

  function createTextBlock(text) {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    const newDivWithTime = document.createElement("div");
    newDivWithTime.id = "divTime";
    const newHr = document.createElement("hr");
    const newBr = document.createElement("br");

    const formattedTime =
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    newDivWithTime.innerHTML = formattedTime;
    newP.innerHTML = text;

    document.querySelector("#main").insertBefore(newDiv, main.firstChild);
    newDiv.appendChild(newP);
    newDiv.appendChild(newBr);
    newDiv.appendChild(newDivWithTime);
    newDiv.appendChild(newBr);
    newDiv.appendChild(newHr);
  }

  getInput();
});
