document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetchButton").addEventListener("click", function () {
    fetch("https://fakestoreapi.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";

        data.forEach((user) => {
          const listItem = document.createElement("li");
          listItem.textContent = user.email;
          userList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
});
