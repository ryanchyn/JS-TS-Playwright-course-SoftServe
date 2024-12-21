import { test, expect } from "@playwright/test";

test("task1", async ({ request }) => {
  const response = await request.get(`https://reqres.in/api/users/2`);
  expect(response.status()).toBe(200);

  const jsonResponse = await response.json();

  expect(jsonResponse.data.first_name).toBe("Janet");
  expect(jsonResponse.data.last_name).toBe("Weaver");
  expect(jsonResponse.data.email).toBe("janet.weaver@reqres.in");
});

test("task2", async ({ request }) => {
  const url = "https://dummyjson.com/posts/add";

  const payload = {
    title: "Awesome title",
    userId: 10,
  };

  const response = await request.post(url, {
    data: payload,
  });

  expect(response.status()).toBe(201);

  const jsonResponse = await response.json();

  expect(jsonResponse.title).toBe(payload.title);
  expect(jsonResponse.userId).toBe(payload.userId);
});

test("task3", async ({ request }) => {
  const response = await request.get("https://dummyjson.com/products", {
    params: {
      skip: 10,
      limit: 5,
    },
  });
  expect(response).toBeOK();

  const jsonResponse = await response.json();
  expect(jsonResponse.products).toHaveLength(5);
  expect(jsonResponse.products[0].price).toBe(1899.99);
  expect(jsonResponse.products[1].rating).toBeLessThan(4);
  expect(
    jsonResponse.products[jsonResponse.products.length - 1].stock
  ).toBeGreaterThan(10);
  expect(jsonResponse.products[0]).toHaveProperty("returnPolicy");
});
