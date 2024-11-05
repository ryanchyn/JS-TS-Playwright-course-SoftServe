//================Task 4=====================

document.addEventListener("DOMContentLoaded", () => {
  function addElement() {
    const newArticle = document.createElement("article");
    newArticle.classList.add("article", "postList");

    const newDiv = document.createElement("div");
    newDiv.id = "container";

    const newP1 = document.createElement("p");
    const newP2 = document.createElement("p");
    const newP3 = document.createElement("p");

    newP1.innerHTML = "Post 1";
    newP2.innerHTML = "Post 2";
    newP3.innerHTML = "Post 3";

    document.body.appendChild(newArticle);
    newArticle.appendChild(newDiv);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newP3);
  }

  addElement();
});
