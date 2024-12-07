function identity<T extends { rating: number }>(data: T[]): number {
  let countOfStudent: number = 0;
  let sumOfRates: number = 0;
  let averageRatePerStudent: number;

  data.forEach((element) => {
    countOfStudent++;
    sumOfRates += element.rating;
  });

  averageRatePerStudent = sumOfRates / countOfStudent;
  return averageRatePerStudent;
}

console.log(identity([{ name: "Anna", rating: 3 }])); // 3
console.log(
  identity([
    { title: "Encounter", rating: 3 },
    { title: "Dead to me", rating: 4 },
    { title: "Riverdale", rating: 5 },
  ])
); // 4
