const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  address: {
    city: "New York",
    country: "USA",
  },
};
function gettUserInfo(obj) {
  const {
    firstName,
    lastName,
    contact: { email, phone },
    address: { city },
  } = obj;

  return [firstName, lastName, email, phone, city];
}

console.log(gettUserInfo(user));
