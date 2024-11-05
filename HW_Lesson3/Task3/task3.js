document.addEventListener("DOMContentLoaded", () => {
  const div = document.querySelector("div");
  const button = document.querySelector("button");

  function onClickMessage() {
    const div = document.querySelector("div");
    div.innerHTML += "I was pressed!<br>";
  }

  function onHoverMessage() {
    const div = document.querySelector("div");
    div.innerHTML += "Mouse on me!<br>";
  }

  function onOutMessage() {
    const div = document.querySelector("div");
    div.innerHTML += "Mouse is not on me!<br>";
  }

  button.addEventListener("click", onClickMessage);
  button.addEventListener("mouseover", onHoverMessage);
  button.addEventListener("mouseout", onOutMessage);
});
