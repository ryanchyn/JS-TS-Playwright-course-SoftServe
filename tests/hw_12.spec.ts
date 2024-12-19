import { test, expect } from "@playwright/test";

test("task1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  const usernameField = page.getByRole("textbox", { name: "Username" });
  const passwordField = page.getByRole("textbox", { name: "Password" });
  const loginButton = page.getByRole("button", { name: "Login" });
  await usernameField.fill("incorrectLogin");
  await passwordField.fill("incorrectPassword");
  await loginButton.click();

  const incorrectLoginMessage = await page
    .locator(".flash.error")
    .textContent();
  expect(incorrectLoginMessage?.trim()).toMatch(/Your username is invalid!/);

  await usernameField.fill("tomsmith");
  await passwordField.fill("SuperSecretPassword!");
  await loginButton.click();

  const successLoginMessage = await page
    .locator(".flash.success")
    .textContent();
  expect(successLoginMessage?.trim()).toMatch(/You logged into a secure area!/);

  const logout = page.locator('i:text("Logout")');
  await logout.click();
  const successLogouMessage = await page
    .locator(".flash.success")
    .textContent();
  expect(successLogouMessage?.trim()).toMatch(
    /You logged out of the secure area!/
  );
});

test("task2", async ({ page }) => {
  await page.goto("https://demo.guru99.com/test/radio.html");

  const checkboxes = page.locator('input[type="checkbox"]');
  const checkboxCount = await checkboxes.count();
  const checkboxArray: boolean[] = [];

  for (let i = 0; i < checkboxCount; i++) {
    const isChecked = await checkboxes.nth(i).isChecked(); // Check if checkbox is checked
    checkboxArray.push(isChecked); // Add the state (true/false) to the array
  }

  expect(checkboxArray).toContain(false);

  // Uncheck checkboxes if they are checked
  for (let i = 0; i < checkboxCount; i++) {
    if (await checkboxes.nth(i).isChecked()) {
      await checkboxes.nth(i).uncheck();
    }
  }

  for (let i = 0; i < checkboxCount; i++) {
    const isStillChecked = await checkboxes.nth(i).isChecked();
    expect(isStillChecked).toBe(false); // Assert each checkbox is unchecked
  }
});

test("task3", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select"
  );
  const iframe = page.frameLocator('iframe[name="iframeResult"]');
  const dropdown = iframe.locator("#cars");
  await dropdown.selectOption("saab");

  const submitInput = iframe.getByRole("button", { name: "Submit" });
  await submitInput.click();
});

test("task4", async ({ page }) => {
  await page.goto("http://formy-project.herokuapp.com/form");
  const firstNameField = page.locator("#first-name");
  const lastNameField = page.locator("#last-name");
  const jobTitleField = page.locator("#job-title");
  const collegeRadio = page.locator("#radio-button-2");
  const maleCheckbox = page.locator("#checkbox-1");
  const yearsOfExperienceDropdown = page.locator("#select-menu");
  const datepicker = page.locator("#datepicker");
  const dateToSelect = page.locator(".datepicker td", { hasText: "15" });
  const submitButton = page.getByText("Submit");
  const alertSuccessfull = page.getByRole("alert");

  await firstNameField.pressSequentially("Sam");
  await lastNameField.pressSequentially("Robertson");
  await jobTitleField.pressSequentially("Test Automation Engineer");
  await collegeRadio.check();
  await maleCheckbox.check();
  await yearsOfExperienceDropdown.selectOption({ value: "3" });
  await datepicker.click();
  await dateToSelect.click();
  await submitButton.click();
  await expect(alertSuccessfull).toContainText(
    "The form was successfully submitted!"
  );
});

test("task5", async ({ page }) => {
  //TBD
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=24"
  ); //Phone and PDAs
  const title = page.locator("h1");
  await expect(title).toContainText("Phones & PDAs");

  const minPriceInput = page
    .locator("#mz-filter-panel-1-0")
    .getByPlaceholder("Minimum Price");
  const maxPriceInput = page
    .locator("#mz-filter-panel-1-0")
    .getByPlaceholder("Maximum Price");

  await minPriceInput.fill("135");
  await maxPriceInput.fill("165");

  const productItems = page.locator(".product-layout");
  const count = await productItems.count();

  expect(count).toBe(8);

  //in progress
});
