//==============Task1==============
document.addEventListener("DOMContentLoaded", () => {
  function getUserInfo() {
    const fieldset = document.querySelector("form");

    fieldset.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = fieldset.querySelector('input[name="fio"]').value;
      const phoneNumber = fieldset.querySelector('input[name="phone"]').value;
      const dateOfBirth = fieldset.querySelector(
        'input[name="birthday"]'
      ).value;
      const emailAddress = fieldset.querySelector('input[name="email"]').value;

      console.log("Name:", name);
      console.log("Phone Number:", phoneNumber);
      console.log("Date of Birth:", dateOfBirth);
      console.log("Email Address:", emailAddress);
    });
  }

  getUserInfo();
});
